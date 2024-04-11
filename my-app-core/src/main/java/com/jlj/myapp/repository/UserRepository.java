package com.jlj.myapp.repository;


import com.jlj.myapp.model.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, Integer> {
	Optional<User> findByUsername(String username);
}
