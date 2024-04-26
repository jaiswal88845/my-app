import axios from "axios";
import { Doctor } from "../../interfaces/Doctor";

const REST_GET_ALL_DOCTORS_URL: string = "http://localhost:8080/my-app/getAll";
const REST_CREATE_DOCTOR_URL: string = "http://localhost:8080/my-app/doctor";

export const listDoctors = () => {
  return axios.get(REST_GET_ALL_DOCTORS_URL);
};

export const createDoctor = (doctor:Doctor) => {
  return axios.post(REST_CREATE_DOCTOR_URL, doctor);
};
