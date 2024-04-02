package com.jlj.myapp;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.services.DoctorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DoctorController {

	@Autowired
	DoctorService doctorService;

	@GetMapping
	public List<DoctorDTO> getAllDoctors() {

		return doctorService.getAllDoctors();

	}

	@PostMapping("/createDoctor")
	public Doctor createDoctor(@RequestBody DoctorDTO doctorDTO) {
		System.out.println("uuuuuuuuuuuuuuuuuuuuuu");
		return doctorService.addDoctor(doctorDTO);
	}
}
