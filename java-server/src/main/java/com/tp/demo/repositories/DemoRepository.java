package com.tp.demo.repositories;

import java.util.List;

import com.tp.demo.models.Demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * DemoRepository
 */

@Repository
public interface DemoRepository extends MongoRepository<Demo, String> {
    public List<Demo> findByValue(@Param("value") String value);
}