package com.jlj.myapp;

import com.jlj.myapp.model.dto.PersonDTO;
import com.jlj.myapp.model.entity.Person;
import com.jlj.myapp.services.PersonServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    PersonServices personServices;

    @GetMapping
    public PersonDTO getPerson() {
       // person.setName("Person Name 001");
       // person.setAge(11);
       // return person;
        return null;

    }

    @PostMapping
    public Person createPerson(@RequestBody PersonDTO personDTO){
        return personServices.addPerson(personDTO);
    }
}
