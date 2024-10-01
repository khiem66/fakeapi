import { useEffect, useState } from "react";
import Carosel from "./components/Carosel/carosel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import axios from "axios";
import ResidentialManagementInterface from "./ResidentialManagementInterface/ResidentialManagementInterface";


function App() {
  return (
    <>
      {/* <Header />
      <Carosel />
      <TableProducts/>
      <Footer /> */}
      <ResidentialManagementInterface/>
    </>
  );
}

export default App;
