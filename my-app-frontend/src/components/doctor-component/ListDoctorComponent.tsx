import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Doctor } from "../../interfaces/Doctor";
import DoctorService from "../../services/DoctorService";

const ListDoctors = () => {
  const { listDoctors, deleteDoctor } = DoctorService();

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [doctorsPerPage] = useState(5); // Number of doctors to display per page
  const navigator = useNavigate();

  useEffect(() => {
    getAllDoctors(currentPage-1);
  }, [currentPage]); // Fetch doctors whenever the currentPage changes

  const getAllDoctors = (page: number) => {
    listDoctors(page, doctorsPerPage)
      .then((res) => {
        console.log('doctors response ', res.data);
        setDoctors(res.data.doctorDTOList);
        setTotalPages(Math.ceil(res.data.numberOfElements / doctorsPerPage))
      })
      .catch((error) => {
        console.log("error-get all doctors------------------->", error);
      });
  };

  const handleDoctorUpdate = (id: string | undefined) => {
    navigator(`/update-doctor/${id}`);
  };

  const handleDoctorDelete = (id: string | undefined) => {
    deleteDoctor(id)
      .then((response) => {
        console.log(response);
        getAllDoctors(currentPage-1); // Reload current page of doctors after deletion
      })
      .catch((error) => console.log("error while deleting-" + error));
  };

  const addNewDoctor = () => {
    navigator("/add-doctor");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Generate array of page numbers for pagination buttons
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

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
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
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
        {/* Pagination */}
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${currentPage === number ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ListDoctors;
