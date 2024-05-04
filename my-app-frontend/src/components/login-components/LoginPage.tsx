import { useState } from "react";
import Authuser from "../../services/AuthUser";

export default function Login() {
  const { http, setToken } = Authuser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = () => {
    http
      .post("/authenticate", { username: email, password: password })
      .then((res) => {
        setToken( res.data.token, res.data.username);
        console.log(res.data);
      });
    console.log(email, password);
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
            id="pwd"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-default mt-4 bg-primary"
          onClick={submitForm}
        >
          Login
        </button>
      </form>
    </div>
  );
}
