package com.jlj.myapp.services;

import com.jlj.myapp.model.dto.UserDTO;
import com.jlj.myapp.model.entity.User;

public interface UserService {

    public UserDTO createUser(UserDTO userDTO);
}
