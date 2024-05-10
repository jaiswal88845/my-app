import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory hook
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { User } from "../../interfaces/User";
import UserService from "../../services/UserService";

function UserRegistration() {
  const { createUser } = UserService();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [roles, setRoles] = useState("ROLE_USER");
  const [mobile, setMobileNumber] = useState("");
  const [error, setError] = useState(""); // State to manage error messages
  const navigator = useNavigate();

  const handleSignup = async () => {
    // Check for empty fields
    if (
      !username ||
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !mobile
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const user: User = { username, email, password, roles };

    createUser(user).then((response) => {
      console.log(response.data);
      navigator("/doctors");
    });
  }
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="border rounded-lg p-4"
          style={{ width: "600px", height: "auto" }}
        >
          <MDBContainer className="p-3">
            <h2 className="mb-4 text-center">Sign Up Page</h2>
            {/* Render error message if exists */}
            {error && <p className="text-danger">{error}</p>}

            <MDBInput
              wrapperClass="mb-3"
              id="username"
              placeholder={"Username"}
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-3"
              id="fullName"
              placeholder={"Full Name"}
              value={fullName}
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-3"
              placeholder="Email Address"
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-3"
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-3"
              placeholder="Confirm Password"
              id="confirmPassword"
              type="password"
              autoComplete="on"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <MDBInput
              wrapperClass="mb-2"
              placeholder="Mobile Number"
              id="mobileNumber"
              value={mobile}
              type="text"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <label className="form-label mb-1">Role:</label>
            <select
              className="form-select mb-4"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            >
              <option value="ROLE_USER">User</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
            <button
              className="mb-4 d-block mx-auto fixed-action-btn btn-primary"
              style={{ height: "40px", width: "100%" }}
              onClick={()=>handleSignup()}
            >
              Sign Up
            </button>

            <div className="text-center">
              <p>
                Already Register? <Link to="/login">Login</Link>
              </p>
            </div>
          </MDBContainer>
        </div>
      </div>
    );
  }

export default UserRegistration;