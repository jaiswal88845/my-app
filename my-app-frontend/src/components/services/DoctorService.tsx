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


export const getDoctorById = (id:string) => {
  return axios.get(REST_CREATE_DOCTOR_URL+'/'+id);
};


export const updateDoctorById = (id:string, doctor:Doctor) => {
  return axios.put(REST_CREATE_DOCTOR_URL+'/'+id, doctor);
};
