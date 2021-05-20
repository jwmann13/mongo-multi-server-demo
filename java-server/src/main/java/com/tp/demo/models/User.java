package com.tp.demo.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.Assert;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "users")
public class User {
    private String id, name;
    private List<Demo> demos;

    public User(String name) {
        Assert.hasText(name, "name cannot be null");

        this.name = name;
    }
}
