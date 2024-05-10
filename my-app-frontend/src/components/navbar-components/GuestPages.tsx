import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import UserLogin from "../login-components/UserLogin";
import UserRegistration from "../login-components/UserRegistration";
import FooterComponent from "../fixed-component/FooterComponent";

function Guest() {
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
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserRegistration />} />
        </Routes>
      </div>
      <FooterComponent />
    </>
  );
}

export default Guest;
