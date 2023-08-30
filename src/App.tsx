import React from "react";
import { Route, Routes } from "react-router-dom";
import Issuedetail from "./pages/Issuedetail";
import Issuelist from "./pages/Issuelist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Issuelist />} />
      <Route path="/:id" element={<Issuedetail />} />
    </Routes>
  );
}

export default App;
