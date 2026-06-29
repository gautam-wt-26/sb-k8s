package com.example.spk8s.dto;

import com.example.spk8s.client.OpenWeatherResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WeatherResponse {

    private String city;
    private String description;
    private double temperature;
    private double feelsLike;
    private int humidity;
    private double windSpeed;

    public static WeatherResponse from(OpenWeatherResponse source) {
        return new WeatherResponse(
            source.getName(),
            source.getWeather().isEmpty() ? "No description" : source.getWeather().get(0).getDescription(),
            source.getMain().getTemp(),
            source.getMain().getFeelsLike(),
            source.getMain().getHumidity(),
            source.getWind().getSpeed()
        );
    }
}
