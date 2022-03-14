import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import { baseUrl, fetchApi } from "./utils/fetchApi";

import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./components/Properties";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PropertyDetails from "./components/PropertyDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/properties/:externalID" element={<PropertyDetails />} />
      </Routes>
    </>
  );
}

export default App;
