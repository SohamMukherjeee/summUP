// react imp ones
import { useState, useEffect } from "react";

// components
import Noise from "../componentPage/Noise";
import "../componentPage/App.css";
import Feature from "../componentPage/Feature";
import BGrid from "../componentPage/BGrid";
import SumMoving from "../componentPage/SumMoving";
import FakeBoxInput from "../componentPage/FakeBoxInput";
import Footer from "../../components/Footer";
// for auth b
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/auth";

function LandingPage() {
  // function
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/summarize");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  function googleLogin() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log("Done");
        if (result.user) {
          navigate("/summarize"); // Ensure this redirects to /dashboard
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading if something fails
      });
  }

  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center bg-[#F2F1ED]">
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/307143-P7Z2RJ-345.jpg')",
        }}
      >
        <Noise
          className="absolute inset-0 w-full h-full"
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={30}
        />

        <div className="relative w-[90vw] h-[700px] mx-10 mt-[80px] sm:mt-[110px] bg-white rounded-xl shadow-lg flex px-12 py-10 flex-col sm:flex-row ">
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
              `,
            }}
          />
          <span className="absolute inset-1 rounded-xl border-2 border-black/30 pointer-events-none z-0"></span>

          <div className="w-full h-full flex items-center justify-center flex-col relative z-10">
            <h1
              className="text-7xl font-semibold text-gray-800 text-center"
              style={{
                fontFamily: "Instrument Serif, serif",
                fontWeight: "400",
              }}
            >
              Instantly Summarize <br />
              Any News Article
            </h1>
            <p
              style={{
                fontFamily: "Instrument Serif, serif",
              }}
              className="text-3xl text-gray-600 mt-[15px] text-center"
            >
              Transform lengthy news articles into concise, actionable summaries
              in seconds.
            </p>
            <button
              className="mt-20 w-30 h-10 rounded-2xl border border-black 
             bg-gradient-to-b from-[#A4D2E7] to-white 
             text-black font-medium shadow-md hover:shadow-lg 
             transition-all duration-200 hover:cursor-pointer"
              onClick={googleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Get Started"}
            </button>
          </div>
        </div>
      </div>
      <Feature />
      <BGrid />
      <FakeBoxInput />
      <SumMoving />
      <Footer />
    </div>
  );
}
export default LandingPage;
