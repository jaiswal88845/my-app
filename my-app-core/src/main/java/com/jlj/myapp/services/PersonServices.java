package com.jlj.myapp.services;

import com.jlj.myapp.converter.DoctorConverter;
import com.jlj.myapp.model.dto.PersonDTO;
import com.jlj.myapp.model.entity.Person;
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

    public List<PersonDTO> getAllPersons(){
       return doctorConverter.convertToDtoList(personRepository.findAll());
    }

    public Person addPerson(PersonDTO personDTO){
        Person person = doctorConverter.convertToEntity(personDTO);
        return personRepository.save(person);
    }





}
