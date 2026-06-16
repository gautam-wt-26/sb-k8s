package com.example.spk8s.controller;

import com.example.spk8s.dto.WeatherResponse;
import com.example.spk8s.service.WeatherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final WeatherService weatherService;

    public WeatherController(WeatherService weatherService) {
        this.weatherService = weatherService;
    }

    @GetMapping
    public ResponseEntity<WeatherResponse> getWeather(@RequestParam("city") String city) {
        WeatherResponse weather = weatherService.getWeatherForCity(city);
        return ResponseEntity.ok(weather);
    }
}
