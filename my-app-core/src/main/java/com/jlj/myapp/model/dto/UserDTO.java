package com.jlj.myapp.model.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class UserDTO {

    private String username;
    private String password;
    private boolean active;
    private String role;
}
