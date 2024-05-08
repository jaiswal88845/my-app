import { Doctor } from "../interfaces/Doctor";
import Authuser from "./AuthUser";

export default function DoctorService() {
  const { http2 } = Authuser();

  const MY_APP_BACKEND_URL_DOCTOR: string =
    import.meta.env.VITE_BACKEND_HOST_URL + "/doctor";

  const listDoctors = () => {
    return http2.get(MY_APP_BACKEND_URL_DOCTOR + '/getAll');
  };

  const createOneDoctor = (doctor: Doctor) => {
    return http2.post(MY_APP_BACKEND_URL_DOCTOR, doctor);
  };

  const getDoctorById = (id: string) => {
    return http2.get(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
  };

  const updateDoctorById = (id: string, doctor: Doctor) => {
    return http2.put(MY_APP_BACKEND_URL_DOCTOR + "/" + id, doctor);
  };

  const deleteDoctorById = (id: string | undefined) => {
    return http2.delete(MY_APP_BACKEND_URL_DOCTOR + "/" + id);
  };

  return {
    listDoctors,
    createDoctor: createOneDoctor,
    getOneDoctor: getDoctorById,
    updateDoctor: updateDoctorById,
    deleteDoctor: deleteDoctorById,
  };
}
