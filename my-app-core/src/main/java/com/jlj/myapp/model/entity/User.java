package com.jlj.myapp.model.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;


@Data
@Document(collection = "user")
public class User implements Serializable {
    @Id
    private String id;
    private String username;
    private String password;
    private boolean active;
    private String roles;

}
