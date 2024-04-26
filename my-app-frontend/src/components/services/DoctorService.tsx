import axios from "axios";


const REST_GET_ALL_DOCTORS_URL:string="http://localhost:8080/my-app/getAll";

export const listDoctors = ()=>{
  return axios.get(REST_GET_ALL_DOCTORS_URL);
}