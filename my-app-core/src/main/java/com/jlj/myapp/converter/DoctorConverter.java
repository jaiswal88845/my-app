package com.jlj.myapp.converter;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;

import com.jlj.myapp.model.dto.PersonDTO;
import com.jlj.myapp.model.entity.Person;

@Service
public class DoctorConverter {
	
    @Autowired
    ModelMapper modelMapper;

    public Person convertToEntity(PersonDTO personDTO) throws ParseException {
        Person post = modelMapper.map(personDTO, Person.class);
        return post;
    }
    
    public PersonDTO convertToDto(Person person) {
        PersonDTO perdonDto = modelMapper.map(person, PersonDTO.class);
        return perdonDto;
    }
    
    
    public List<PersonDTO> convertToDtoList(List<Person> persons) {
    	  List<PersonDTO> personDTOs = persons
        		  .stream()
        		  .map(user -> modelMapper.map(user, PersonDTO.class))
        		  .collect(Collectors.toList());
    	  return personDTOs;
    }
  
}
