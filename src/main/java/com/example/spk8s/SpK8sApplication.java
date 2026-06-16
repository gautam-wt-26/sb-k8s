package com.example.spk8s;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class SpK8sApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpK8sApplication.class, args);
    }

}
