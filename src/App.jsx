import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import Dash from "./components/Dashpage.jsx";
import Dashright from "./components/Dashright.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashright />} /> {/* Correct path */}
      </Routes>
    </Router>
  );
}

export default App;
