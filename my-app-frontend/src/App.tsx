import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListDoctors from "./components/ListDoctorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorComponent from "./components/DoctorComponent";

import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListDoctors />}></Route>
          <Route path="/employees" element={<ListDoctors />}></Route>
          <Route path="/add-doctor" element={<DoctorComponent />}></Route>
          <Route path="/update-doctor/:id" element={<DoctorComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
