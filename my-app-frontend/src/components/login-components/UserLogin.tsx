import { useState } from "react";
import Authuser from "../../services/AuthUserService";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {
  const { http, setToken } = Authuser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const submitForm = () => {
    http
      .post("/authenticate", { username: email, password: password })
      .then((res) => {
        setToken(res.data.token, res.data.username);
        console.log(res.data);
      });
    console.log(email, password);
  };

  const handleSignUp = () => {
    navigator("/signUp");
  };

  return (
    <div className="container">
      <form action="/action_page.php">
        <div className="form-group">
          <label>Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            autoComplete="on"
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div >
          <button
            type="button"
            className="btn btn-default mr-2 bg-primary"
            onClick={submitForm}
          >
            Login
          </button>

          <button
            type="button"
            className="btn btn-default btn-secondary "
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
