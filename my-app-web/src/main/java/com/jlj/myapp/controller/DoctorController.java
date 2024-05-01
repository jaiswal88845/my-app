package com.jlj.myapp.controller;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.services.DoctorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RequestMapping("/doctor")
@RestController
public class DoctorController {

	@Autowired
	DoctorService doctorService;
	@GetMapping("/getAll")
	@PreAuthorize("hasRole('ROLE_USER')")
	public List<DoctorDTO> getAllDoctors() {
		return doctorService.getAllDoctors();
	}
	@GetMapping("/{id}")
	public DoctorDTO getAllDoctor(@PathVariable String id) {
		return doctorService.getDoctorById(id);
	}
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping
	public Doctor createDoctor(@RequestBody DoctorDTO doctorDTO) {
		return doctorService.addDoctor(doctorDTO);
	}

	@PutMapping("/{id}")
	public Doctor updateDoctor(@PathVariable String id, @RequestBody DoctorDTO doctorDTO) {
		doctorDTO.setId(id);
		return doctorService.addDoctor(doctorDTO);
	}
	@DeleteMapping("/{id}")
	public void deleteDoctor(@PathVariable String id) {
		 doctorService.deleteDoctorById(id);
	}
}
