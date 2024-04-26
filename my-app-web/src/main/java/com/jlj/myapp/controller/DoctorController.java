package com.jlj.myapp.controller;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.services.DoctorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
public class DoctorController {

	@Autowired
	DoctorService doctorService;
	@GetMapping("/getAll")
	public List<DoctorDTO> getAllDoctors() {
		return doctorService.getAllDoctors();
	}
	@GetMapping("/doctor/{id}")
	public DoctorDTO getAllDoctor(@PathVariable String id) {
		return doctorService.getDoctorById(id);
	}
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping("/doctor")
	public Doctor createDoctor(@RequestBody DoctorDTO doctorDTO) {
		return doctorService.addDoctor(doctorDTO);
	}

	@PutMapping("/doctor/{id}")
	public Doctor updateDoctor(@PathVariable String id, @RequestBody DoctorDTO doctorDTO) {
		doctorDTO.setId(id);
		return doctorService.addDoctor(doctorDTO);
	}
}
