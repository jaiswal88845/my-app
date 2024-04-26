package com.jlj.myapp.services;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;

import java.util.List;

public interface DoctorService {

    public List<DoctorDTO> getAllDoctors();

    public Doctor addDoctor(DoctorDTO doctorDTO);

    public DoctorDTO getDoctorById(String id);

    public void deleteDoctorById(String id);
}
