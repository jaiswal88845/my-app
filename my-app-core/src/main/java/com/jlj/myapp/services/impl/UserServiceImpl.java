package com.jlj.myapp.services.impl;

import com.jlj.myapp.converter.UserConverter;
import com.jlj.myapp.enums.ResponseCode;
import com.jlj.myapp.exception.UsernameAlreadyExistsException;
import com.jlj.myapp.model.dto.UserDTO;
import com.jlj.myapp.model.entity.User;
import com.jlj.myapp.repository.UserRepository;
import com.jlj.myapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
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

        try {
            userEntity = userRepository.save(userEntity);
        } catch (DuplicateKeyException e) {
            throw new UsernameAlreadyExistsException(ResponseCode.USER_ALREADY_EXIST, userDTO.getUsername());
        }
        return userConverter.convertToDTO(userEntity);
    }
}
