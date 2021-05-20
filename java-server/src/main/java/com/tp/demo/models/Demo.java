package com.tp.demo.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.util.Assert;

/**
 * Demo
 */

@Data
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "demos")
public class Demo {

    @Id
    private String _id;

    @Field("value")
    @Indexed
    private String value;

    public Demo(String value) {
        Assert.hasText(value, "Value cannot be null");

        this.value = value;
    }
}