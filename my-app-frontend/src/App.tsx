import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListDoctors from "./components/doctor-component/ListDoctorComponent";
import HeaderComponent from "./components/fixed-component/HeaderComponent";
import FooterComponent from "./components/fixed-component/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorComponent from "./components/doctor-component/DoctorComponent";

import './App.css';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
         {/* <Route path="/" element={<ListDoctors />}></Route> */}
          <Route path="/doctors" element={<ListDoctors />}></Route>
          <Route path="/add-doctor" element={<DoctorComponent />}></Route>
          <Route path="/update-doctor/:id" element={<DoctorComponent />}></Route>

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
