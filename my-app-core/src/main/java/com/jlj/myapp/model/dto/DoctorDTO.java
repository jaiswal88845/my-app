package com.jlj.myapp.model.dto;

import com.jlj.myapp.model.entity.BaseEntity;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class DoctorDTO extends BaseEntity {

    private String id;
    private String name;

    private String email;
    private int age;
}
