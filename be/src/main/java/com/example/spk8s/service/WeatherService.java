package com.example.spk8s.service;

import com.example.spk8s.client.OpenWeatherResponse;
import com.example.spk8s.config.WeatherApiProperties;
import com.example.spk8s.dto.WeatherResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

@Service
public class WeatherService {

    private final WebClient webClient;
    private final WeatherApiProperties weatherApiProperties;

    public WeatherService(WebClient.Builder webClientBuilder, WeatherApiProperties weatherApiProperties) {
        this.webClient = webClientBuilder.baseUrl(weatherApiProperties.getUrl()).build();
        this.weatherApiProperties = weatherApiProperties;
    }

    public WeatherResponse getWeatherForCity(String city) {
        try {
            OpenWeatherResponse apiResponse = webClient.get()
                    .uri(uriBuilder -> uriBuilder
                            .queryParam("q", city)
                            .queryParam("appid", weatherApiProperties.getKey().trim())
                            .queryParam("units", weatherApiProperties.getUnits())
                            .build())
                    .retrieve()
                    .bodyToMono(OpenWeatherResponse.class)
                    .block();

            if (apiResponse == null) {
                throw new IllegalStateException("Weather service returned an empty response");
            }

            return WeatherResponse.from(apiResponse);
        } catch (WebClientResponseException ex) {
            throw new IllegalArgumentException("Could not fetch weather for city: " + city + ". Response code: " + ex.getStatusCode(), ex);
        }
    }
}
