package com.jlj.myapp.model.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "doctor")
public class Doctor extends BaseEntity {

    @Id
    private String id;
    private String name;
    private String email;
    private int age;

}
