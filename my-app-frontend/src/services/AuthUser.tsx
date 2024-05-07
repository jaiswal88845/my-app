import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authuser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    if (tokenString != null) {
      const userToken = JSON.parse(tokenString);
      return userToken;
    }else{
      //TODO: return some error
    }
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("username");
    if (userString != null) {
      const username = JSON.parse(userString);
      return username;
    } else {
      //TODO: return some error
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
    console.log('logout called')
    sessionStorage.clear();
    navigate("/login");
  };

  const http = axios.create({
    baseURL: "http://localhost:8080/my-app",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const http2 = axios.create({
    baseURL: "http://localhost:8080/my-app",
    headers: {
      'Content-Type': 'application/json',
     // 'Authorization':`Bearer ${token}`
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1lc2giLCJpYXQiOjE3MTUwNDMxOTAsImV4cCI6MTcxNTA0NDk5MH0.d7n8TWklb-N2DMY5G8EpBx5Lw3jfp1TLvClLqGY46CQ",
  }
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
