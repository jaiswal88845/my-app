package com.jlj.myapp.model.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class PersonDTO {

    private String name;
    private int age;
}
