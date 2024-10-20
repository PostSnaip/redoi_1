package com.example.cryptoportfoliobot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gcp.autoconfigure.core.GcpContextAutoConfiguration;

@SpringBootApplication(exclude = {GcpContextAutoConfiguration.class})
public class CryptoPortfolioBotApplication {

    public static void main(String[] args) {
        SpringApplication.run(CryptoPortfolioBotApplication.class, args);
    }
}