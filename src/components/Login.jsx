import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "./auth";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard"); // Ensure this redirects to /dashboard
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.log("Done");
        if (result.user) {
          toast.success("Successfully Logged in", {
            position: "bottom-center",
          });
          navigate("/dashboard"); // Ensure this redirects to /dashboard
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
        toast.error("Failed to log in", {
          position: "bottom-center",
        });
      });
  }

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-10 md:gap-20 lg:gap-30">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
            <h1 className="bg-gradient-to-r from-gray-300 to-blue-200 bg-clip-text text-transparent font-bold text-4xl md:text-6xl lg:text-8xl xl:text-9xl">
              summUp
            </h1>
            <p className="text-white font-bold text-xl md:text-2xl">
              Summarize any article
            </p>
          </div>

          <GoogleButton onClick={googleLogin} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
