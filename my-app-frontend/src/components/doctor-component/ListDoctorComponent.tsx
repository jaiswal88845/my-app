import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { deleteDoctorById } from "../../services/DoctorService";

import { useNavigate } from "react-router-dom";

import { Doctor } from "../../interfaces/Doctor";
import Authuser from "../../services/AuthUser";

const ListDoctors = () => {
  const { http2 } = Authuser();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const navigator = useNavigate();


  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = () => {
    http2
      .get("/doctor/getAll")
      .then((res) => {
        console.log(res.data);
        setDoctors(res.data)
      })
      .catch((error) => {
        console.log("error-------------------->", error);
      });
  };

  const handleDoctorUpdate = (id: string | undefined) => {
    navigator(`/update-doctor/${id}`);
  };

  const handleDoctorDelete = (id: string | undefined) => {
    console.log("id--" + id);
    deleteDoctorById(id)
      .then((response) => {
        console.log(response);
        getAllDoctors();
      })
      .catch((error) => console.log("error while deleting-" + error));
  };

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.age}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleDoctorUpdate(doctor.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDoctorDelete(doctor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListDoctors;
