import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HowItWorks from "./components/HowItWorks.jsx";
import AfterText from "./components/AfterText.jsx";
import SharedSummary from "./components/SharedSummary.jsx";
import PrivateRoute from "./components/PrivateRout.jsx";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowItWorks />} />
        <Route
          path="/summarize"
          element={
            <PrivateRoute>
              <AfterText />
            </PrivateRoute>
          }
        />
        <Route path="/news" element={<SharedSummary />} />
      </Routes>
    </Router>
  );
}

export default App;
