package com.tp.demo.repositories;

import com.tp.demo.models.Demo;

import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoOperations;

@DataMongoTest
public class DemoRepositoryIntegrationTest {
    @Autowired DemoRepository repository;
    @Autowired MongoOperations operations;

    private Demo toTest;

    @BeforeEach
    void setup() {
        repository.deleteAll();

        toTest = repository.save(new Demo("test"));
    }
    
}
