package com.jlj.myapp.model.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class DoctorDTO {

    private String id;
    private String name;
    private int age;
}
