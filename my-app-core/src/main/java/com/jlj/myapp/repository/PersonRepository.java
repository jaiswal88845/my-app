package com.jlj.myapp.repository;


import com.jlj.myapp.model.entity.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonRepository extends MongoRepository<Doctor, String> {
    // Define custom methods if needed
}
