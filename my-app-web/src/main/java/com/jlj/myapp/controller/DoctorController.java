package com.jlj.myapp.controller;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import com.jlj.myapp.model.wrappers.DoctorsResponse;
import com.jlj.myapp.services.DoctorService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;



@RequestMapping("/doctor")
@RestController
public class DoctorController {

	@Autowired
	DoctorService doctorService;
	@GetMapping("/getAll")
	@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
	public DoctorsResponse getAllDoctors(@RequestParam Integer currentPage, @RequestParam Integer doctorsPerPage) {
		long totalNumberOfDoctors= doctorService.getTotalNumberOfDoctors() ;

		return DoctorsResponse.builder().doctorDTOList(doctorService.getAllDoctors(currentPage,doctorsPerPage)).numberOfElements(totalNumberOfDoctors).build();
		//return doctorService.getAllDoctors(currentPage,doctorsPerPage);
	}
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
	public DoctorDTO getAllDoctor(@PathVariable String id) {
		return doctorService.getDoctorById(id);
	}
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping
	public Doctor createDoctor(@RequestBody DoctorDTO doctorDTO) {
		return doctorService.addDoctor(doctorDTO);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public Doctor updateDoctor(@PathVariable String id, @RequestBody DoctorDTO doctorDTO) {
		doctorDTO.setId(id);
		return doctorService.addDoctor(doctorDTO);
	}
	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void deleteDoctor(@PathVariable String id) {
		 doctorService.deleteDoctorById(id);
	}
}
