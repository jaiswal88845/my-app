import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { listDoctors } from "./services/DoctorService";

import { useNavigate } from "react-router-dom";

import { Doctor } from "../interfaces/Doctor";

const ListDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const navigator = useNavigate();

  useEffect(() => {
    listDoctors()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addNewDoctor = () => {
    navigator("/add-doctor");
  };

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-success btn-outline"
          onClick={addNewDoctor}
        >
          Add Doctor
        </button>
        <h1 className="text-center">List Of Doctors</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.name}>
                <th>{doctor.name}</th>
                <td>{doctor.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListDoctors;
