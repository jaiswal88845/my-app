package com.jlj.myapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class LoginController {
    @PostMapping("/login")
    public String login(){
        return "Success";
    }
}
