import axios from "axios";
import { Doctor } from "../interfaces/Doctor";
import Authuser from "./AuthUser";

export default function DoctorService() {
  const { http2 } = Authuser();

  const MY_APP_BACKEND_URL_DOCTOR: string =
    import.meta.env.VITE_BACKEND_HOST_URL + "/doctor";

  const listDoctors = (jwtToken: string) => {
    const headers = { Authorization: jwtToken };
    return axios.get(MY_APP_BACKEND_URL_DOCTOR, { headers });
  };

  const createDoctor = (doctor: Doctor) => {
    return axios.post(MY_APP_BACKEND_URL_DOCTOR, doctor);
  };

  const getDoctorById = (id: string) => {
    return http2.get(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
  };

  const updateDoctorById = (id: string, doctor: Doctor) => {
    return axios.put(MY_APP_BACKEND_URL_DOCTOR + "/" + id, doctor);
  };

   const deleteDoctorById = (id: string | undefined) => {
    return axios.delete(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
  };

  return {
    listDoctors,
    create: createDoctor,
    getOneDoctor: getDoctorById,
    update: updateDoctorById,
    deleteDoctor: deleteDoctorById,
  };
}
