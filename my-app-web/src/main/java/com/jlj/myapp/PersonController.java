package com.jlj.myapp;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.services.PersonServices;

import java.util.List;

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
	public List<DoctorDTO> getAllDoctors() {

		return personServices.getAllPersons();

	}

	@PostMapping
	public Doctor createPerson(@RequestBody DoctorDTO doctorDTO) {
		return personServices.addPerson(doctorDTO);
	}
}
