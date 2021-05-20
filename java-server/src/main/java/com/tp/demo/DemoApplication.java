package com.tp.demo;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
 
	// public @Bean MongoClient mongoClient() {
	// 	return MongoClients.create("mongodb://admin:password@localhost:27017");
	// }

	// public @Bean MongoTemplate mongoTemplate() {
	// 	return new MongoTemplate(mongoClient(), "test");
	// }
}
