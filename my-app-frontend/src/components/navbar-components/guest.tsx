import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "../login-components/LoginPage";
import SignupPage from "../login-components/SignUpPage";

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
        <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/signup" element={ <SignupPage/>} /> 

        </Routes>
      </div>
    </>
  );
}

export default Guest;
