import { ChangeEvent, useEffect, useState } from "react";
import { Doctor, DoctorErrors } from "../../interfaces/Doctor";
import { useNavigate, useParams } from "react-router-dom";
import DoctorService from "../../services/DoctorService";
import ValidateDoctor from "../validate-components/ValidateDoctors";
const DoctorComponent = () => {
  const { getOneDoctor, updateDoctor, createDoctor } = DoctorService();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const { validateDoctorSubmit } = ValidateDoctor();
  const navigator = useNavigate();

  const [errors, setErrors] = useState<DoctorErrors>({});

  const handleSubmitCreateOrUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const doctor: Doctor = { name, email, age };
    const validationErrors = validateDoctorSubmit(doctor);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (id) {
        updateDoctor(id, doctor)
          .then((response) => {
            console.log(response.data);
            navigator("/doctors");
          })
          .catch((error) => {
            console.log("error while updating doctor->" + error);
          });
      } else {
        createDoctor(doctor).then((response) => {
          console.log(response.data);
          navigator("/doctors");
        });
      }
    }
  };

  const handleClearForm = () => {
    setName("");
    setAge(0);
    setEmail("");
    setMessage("");
  };

  const pageTitle = () => {
    if (id) {
      return <h2 className="text-center">Update a Doctor</h2>;
    } else {
      return <h2 className="text-center">Create a Doctor</h2>;
    }
  };

  const handleButtonName = () => {
    if (id) {
      return "Update";
    } else {
      return "Create";
    }
  };

  useEffect(() => {
    console.log("id-", id);
    if (id) {
      getOneDoctor(id)
        .then((response) => {
          setName(response.data.name);
          setAge(response.data.age);
        })
        .catch((error) => {
          console.log("error while fetching employee By Id-->", error);
        });
    }
  }, [id]);

  return (
    <>
      <div className="container">
        {pageTitle()}
        <form onSubmit={handleSubmitCreateOrUpdate}>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={name}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                  }
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.target.value)
                  }
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="age" className="form-label fw-bold">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAge(parseInt(event.target.value))
                  }
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.age}</div>
                )}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Message
            </label>
            <textarea
              className="form-control"
              rows={3}
              value={message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(event.target.value)
              }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
            {handleButtonName()}
          </button>
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={handleClearForm}
          >
            Clear Form
          </button>
        </form>
      </div>
    </>
  );
};

export default DoctorComponent;
