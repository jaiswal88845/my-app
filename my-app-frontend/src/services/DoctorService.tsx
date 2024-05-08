import axios from "axios";
import { Doctor } from "../interfaces/Doctor";

const MY_APP_BACKEND_URL_DOCTOR: string =
  import.meta.env.VITE_BACKEND_HOST_URL +"/doctor"


export const listDoctors = (jwtToken: string) => {
  const headers = { Authorization: jwtToken };
  return axios.get(MY_APP_BACKEND_URL_DOCTOR, { headers });
};

export const createDoctor = (doctor: Doctor) => {
  return axios.post(MY_APP_BACKEND_URL_DOCTOR, doctor);
};

export const getDoctorById = (id: string) => {
  return axios.get(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
};

export const updateDoctorById = (id: string, doctor: Doctor) => {
  return axios.put(MY_APP_BACKEND_URL_DOCTOR + "/" + id, doctor);
};

export const deleteDoctorById = (id: string | undefined) => {
  return axios.delete(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
};
