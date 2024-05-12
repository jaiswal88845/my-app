package com.jlj.myapp.model.wrappers;

import com.jlj.myapp.model.dto.DoctorDTO;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class DoctorsResponse {
    private List<DoctorDTO> doctorDTOList;
    private Integer numberOfElements;
}
