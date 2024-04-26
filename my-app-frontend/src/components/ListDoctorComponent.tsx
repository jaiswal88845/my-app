import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { listDoctors } from "./services/DoctorService";

interface Doctor {
  id: number;
  name: string;
  age: number;
}


const Doctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]); 

  useEffect(() => {
    listDoctors()
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
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
              <tr key={doctor.id}>
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

export default Doctors;
