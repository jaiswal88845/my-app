import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Doctors from "./components/ListDoctorComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Doctors />
      <FooterComponent/>
    </React.Fragment>
  );
}

export default App;
