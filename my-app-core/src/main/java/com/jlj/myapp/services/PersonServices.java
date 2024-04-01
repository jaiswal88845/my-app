package com.jlj.myapp.services;

import com.jlj.myapp.converter.TestConverter;
import com.jlj.myapp.model.dto.PersonDTO;
import com.jlj.myapp.model.entity.Person;
import com.jlj.myapp.repository.PersonRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServices {

    @Autowired
    PersonRepository personRepository;

    @Autowired
    ModelMapper modelMapper;

    public List<Person> getAllPersons(){
       return personRepository.findAll();
    }

    public Person addPerson(PersonDTO personDTO){
        Person person = convertToEntity(personDTO);
        return personRepository.save(person);
    }


    private Person convertToEntity(PersonDTO postDto) throws ParseException {
        Person post = modelMapper.map(postDto, Person.class);

        return post;
    }


}
