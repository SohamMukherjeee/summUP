import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedSummary from "./components/SharedSummary.jsx";
import PrivateRoute from "./components/PrivateRout.jsx";
import LandingPage from "./LandingPage/pages/LandingPage.jsx";
import BoxInput from "./SummPage/BoxInput.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/summarize"
          element={
            <PrivateRoute>
              <BoxInput />
            </PrivateRoute>
          }
        />
        <Route path="/news" element={<SharedSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
