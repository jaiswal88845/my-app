package com.jlj.myapp.converter;

import com.jlj.myapp.model.dto.PersonDTO;
import com.jlj.myapp.model.entity.Person;

public class TestConverter {

    public static Person convertPersonDTOtoPerson(PersonDTO dto){
        Person person = new Person();
        person.setName(dto.getName());
        person.setAge(dto.getAge());
        return person;

    }
}
