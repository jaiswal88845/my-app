package com.jlj.myapp.services.impl;

import com.jlj.myapp.converter.DoctorConverter;
import com.jlj.myapp.enums.ResponseCode;
import com.jlj.myapp.exception.ResourceNotFoundException;
import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.repository.DoctorRepository;
import com.jlj.myapp.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public DoctorDTO getDoctorById(String id) {
        Optional<Doctor> doctorOptional= doctorRepository.findById(id);
        Doctor doc =  doctorOptional
                .orElseThrow(()->new ResourceNotFoundException(ResponseCode.DOCTOR_NOT_FOUND_WITH_ID, id));
        return  doctorConverter.convertToDto(doc);
    }


}
