import { Doctor, DoctorErrors } from "../../interfaces/Doctor";

//these functions are similar to hooks
export default function ValidateDoctor() {

    const validateDoctorSubmit = (doctor : Doctor):DoctorErrors =>   {
        const errors: DoctorErrors = {};
      
        if (!doctor.name.trim()) {
          errors.name = "Name is required!!!!!!!!!!!!!!!!";
        }
      
        if (!doctor.email.trim()) {
          errors.email = "Email is required";
        }
      
        if (doctor.age<1) {
          errors.age = "Age should be positive number";
        }
      
        return errors;
      };
      

  return {
    validateDoctorSubmit:validateDoctorSubmit
  };
}
