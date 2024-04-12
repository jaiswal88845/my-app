package com.jlj.myapp.converter;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.dto.UserDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.model.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserConverter {
    @Autowired
    ModelMapper modelMapper;

    public User convertToEntity(UserDTO userDTO) {
        User user = modelMapper.map(userDTO, User.class);
        return user;
    }


    public UserDTO convertToDTO(User user) {
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return userDTO;
    }


    public List<UserDTO> convertToDtoList(List<User> users) {
        List<UserDTO> userDTOS = users
                .stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
        return userDTOS;
    }
}
