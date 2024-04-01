package com.jlj.myapp.repository;


import com.jlj.myapp.model.entity.Person;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<Person, String> {
    // Define custom methods if needed
}
