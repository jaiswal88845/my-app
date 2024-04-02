package com.jlj.myapp.services;

import com.jlj.myapp.converter.DoctorConverter;
import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServices {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    DoctorConverter doctorConverter;

    public List<DoctorDTO> getAllPersons(){
       return doctorConverter.convertToDtoList(personRepository.findAll());
    }

    public Doctor addPerson(DoctorDTO doctorDTO){
        Doctor doctor = doctorConverter.convertToEntity(doctorDTO);
        return personRepository.save(doctor);
    }





}
