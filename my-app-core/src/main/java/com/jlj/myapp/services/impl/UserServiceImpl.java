package com.jlj.myapp.services.impl;

import com.jlj.myapp.model.entity.User;
import com.jlj.myapp.repository.UserRepository;
import com.jlj.myapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;


    @Override
    public User createUser(User user) {
        return null;
    }
}
