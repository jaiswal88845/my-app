import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authuser() {
  const MY_APP_BACKEND_ROOT_URL: string = import.meta.env.VITE_BACKEND_HOST_URL;

  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString != null) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    } else {
      console.log("token is not found in session storate");
    }
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("username");
    if (userString != null) {
      const username = JSON.parse(userString);
      return username;
    } else {
      console.log("username is not found in session storate");
    }
  };
  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUser());

  const saveToken = (token: string, username: string) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("username", JSON.stringify(username));

    setToken(token);
    setUsername(username);
    navigate("/dashboard");
  };

  const logout = () => {
    console.log("logout called");
    sessionStorage.clear();
    navigate("/login");
  };

  const http = axios.create({
    baseURL: MY_APP_BACKEND_ROOT_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const http2 = axios.create({
    baseURL: MY_APP_BACKEND_ROOT_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    setToken: saveToken,
    token,
    username,
    getToken,
    http,
    http2,
    logout,
  };
}
