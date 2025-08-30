import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from "./components/HowItWorks.jsx";
import AfterText from "./components/AfterText.jsx";
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
        <Route path="/test1" element={<LandingPage />} />
        <Route path="/test2" element={<BoxInput />} />
      </Routes>
    </Router>
  );
}

export default App;
