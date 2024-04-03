package com.jlj.myapp.converter;

import com.jlj.myapp.model.dto.DoctorDTO;
import com.jlj.myapp.model.entity.Doctor;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
@ExtendWith(MockitoExtension.class)
public class DoctorConverterTest {
    @InjectMocks
    DoctorConverter doctorConverter;

    @Mock
    ModelMapper modelMapper;

    @Test
    public void convertToEntity_test(){
        Doctor doctor=new Doctor();
        doctor.setName("Jiye");
        when(modelMapper.map(any(), any())).thenReturn(doctor);

        Doctor returnedDoc = doctorConverter.convertToEntity(new DoctorDTO());
        assertEquals("Jiye", returnedDoc.getName());
    }
}
