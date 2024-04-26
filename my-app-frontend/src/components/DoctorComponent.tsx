import { ChangeEvent, useState } from "react";
import { createDoctor } from "./services/DoctorService";
import { Doctor } from "../interfaces/Doctor";
import { useNavigate } from "react-router-dom";

const DoctorComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    age,
  });

  const validateForm = () => {
    let isvalid = true;
    const errorCopy = {... errors};
    if (name.trim()) {
      errorCopy.name = '';
    } else {
      errorCopy.name = "First Name is empty";
      isvalid = false;
    }

    setErrors(errorCopy);
    return isvalid;
  };

  const navigator = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const doctor: Doctor = { name, age };
      createDoctor(doctor).then((response) => {
        console.log(response.data);
        navigator("/employees");
      });
    }
  };

  const handleClearForm = () => {
    setName("");
    setAge(0);
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <div className="container">
        <h2 className="text-center">Create a Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
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
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.target.value)
                  }
                />
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
                  id="age"
                  name="age"
                  value={age}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAge(parseInt(event.target.value))
                  }
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={3}
              value={message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(event.target.value)
              }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
            Create
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
