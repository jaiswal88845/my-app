package com.jlj.myapp.model;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Person {

    private String name;
    private int age;
}
