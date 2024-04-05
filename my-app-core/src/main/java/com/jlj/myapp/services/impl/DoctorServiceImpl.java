package com.jlj.myapp.services.impl;

import com.jlj.myapp.converter.DoctorConverter;
import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.repository.DoctorRepository;
import com.jlj.myapp.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorServiceImpl implements DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    DoctorConverter doctorConverter;

    public List<DoctorDTO> getAllDoctors(){
       return doctorConverter.convertToDtoList(doctorRepository.findAll());
    }

    public Doctor addDoctor(DoctorDTO doctorDTO){
        Doctor doctor = doctorConverter.convertToEntity(doctorDTO);
        return doctorRepository.save(doctor);
    }





}