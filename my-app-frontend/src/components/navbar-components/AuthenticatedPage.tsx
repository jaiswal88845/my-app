import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import Authuser from "../../services/AuthUser";
import ListDoctors from "../doctor-component/ListDoctorComponent";
import DoctorComponent from "../doctor-component/DoctorComponent";
import Dashboard from "../login-components/DashBoard";
import FooterComponent from "../fixed-component/FooterComponent";
import SignupPage from "../login-components/SignUpPage";

function Auth() {
  const { token, logout } = Authuser();
  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/doctors"
                >
                  Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <span role="button" className="nav-link" onClick={logoutUser}>
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/doctors" element={<ListDoctors />}></Route>
          <Route path="/add-doctor" element={<DoctorComponent />}></Route>
          <Route
            path="/update-doctor/:id"
            element={<DoctorComponent />}
          ></Route>
          <Route path="/signUp" element={<SignupPage />}></Route>
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default Auth;
