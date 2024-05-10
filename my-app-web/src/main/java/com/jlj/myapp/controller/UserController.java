package com.jlj.myapp.controller;

import com.jlj.myapp.model.dto.UserDTO;
import com.jlj.myapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    public PasswordEncoder passwordEncoder;

    @Autowired
    public UserService userService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDto){
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        userDto = userService.createUser(userDto);
        return userDto;
    }
}
