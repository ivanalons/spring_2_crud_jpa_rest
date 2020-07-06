package com.employees.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class Spring2CrudRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(Spring2CrudRestApplication.class, args);
	}

	// Solucio problema CORS:
	// Permisos totals d'accés al RestController perque el frontal es un projecte web 
	// estatic local i la web home.html es un fitxer local. No cal executar-lo des 
	// d'un servidor Apache
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","PUT","DELETE");
			}
		};
	}	
	
}
