package com.jlj.myapp.services.impl;

import com.jlj.myapp.converter.UserConverter;
import com.jlj.myapp.model.dto.UserDTO;
import com.jlj.myapp.model.entity.User;
import com.jlj.myapp.repository.UserRepository;
import com.jlj.myapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;

    @Autowired
    public UserConverter userConverter;


    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User userEntity = userConverter.convertToEntity(userDTO);
        userEntity = userRepository.save(userEntity);
        return userConverter.convertToDTO(userEntity);
    }
}
