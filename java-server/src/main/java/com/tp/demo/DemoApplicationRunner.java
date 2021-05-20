package com.tp.demo;

import com.tp.demo.models.Demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class DemoApplicationRunner implements CommandLineRunner {

    private MongoTemplate mongoTemplate;

    public DemoApplicationRunner(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Application running...");
    }

}
