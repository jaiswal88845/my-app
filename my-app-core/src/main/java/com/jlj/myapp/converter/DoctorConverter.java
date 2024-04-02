package com.jlj.myapp.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;

@Service
public class DoctorConverter {
	
    @Autowired
    ModelMapper modelMapper;

    public Doctor convertToEntity(DoctorDTO doctorDTO) throws ParseException {
        Doctor post = modelMapper.map(doctorDTO, Doctor.class);
        return post;
    }
    
    public DoctorDTO convertToDto(Doctor doctor) {
        DoctorDTO perdonDto = modelMapper.map(doctor, DoctorDTO.class);
        return perdonDto;
    }
    
    
    public List<DoctorDTO> convertToDtoList(List<Doctor> doctors) {
    	  List<DoctorDTO> doctorDTOS = doctors
        		  .stream()
        		  .map(user -> modelMapper.map(user, DoctorDTO.class))
        		  .collect(Collectors.toList());
    	  return doctorDTOS;
    }
  
}
