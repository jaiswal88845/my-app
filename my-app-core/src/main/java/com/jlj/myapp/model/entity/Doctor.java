package com.jlj.myapp.model.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "person")
public class Doctor {

    @Id
    private String id;
    private String name;
    private int age;

}
