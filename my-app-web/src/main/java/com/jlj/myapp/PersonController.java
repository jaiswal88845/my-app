package com.jlj.myapp;

import com.jlj.myapp.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    Person person;
    @GetMapping
    public Person getPerson() {
        person.setName("Person Name 001");
        person.setAge(11);
        return person;

    }
}
