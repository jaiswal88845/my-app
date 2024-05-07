package com.jlj.myapp.controller;

import com.jlj.myapp.model.dto.LoginRequestDTO;
import com.jlj.myapp.model.dto.LoginResponseDTO;
import com.jlj.myapp.services.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {


    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;


    @PostMapping("/authenticate")
    public LoginResponseDTO authenticateAndGetToken(@RequestBody LoginRequestDTO loginRequestDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDTO.getUsername(), loginRequestDTO.getPassword()));
        if (authentication.isAuthenticated()) {
            return new LoginResponseDTO(jwtService.generateToken(loginRequestDTO.getUsername()), loginRequestDTO.getUsername());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }
}
