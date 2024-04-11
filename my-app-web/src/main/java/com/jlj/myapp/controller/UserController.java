package com.jlj.myapp.controller;

import com.jlj.myapp.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    public PasswordEncoder passwordEncoder;

    @PostMapping("/createUser")
    public User createUser(@RequestBody User userDto){
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        return userDto;
    }
}
