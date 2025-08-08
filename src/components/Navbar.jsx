import React, { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./auth";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo2-removebg-preview.png";

function Navbar() {
  const toggleTheme = (e) => {
    document.documentElement.setAttribute(
      "data-theme",
      e.target.checked ? "sunset" : "lemonade"
    );
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };
  return (
    <div className="w-screen flex flex-row items-center justify-between px-6 py-4 bg-base-100 shadow-md">
      <h1 className="text-2xl font-bold">
        {user?.displayName ? (
          `👋 ${user.displayName}`
        ) : (
          <span className="flex items-center justify-center flex-row gap-x-1">
            <img src={logo} className="w-7 h-10 inline-block" alt="Logo" />
            {/* Summ<span className="text-red-400">UP</span> */}
          </span>
        )}
      </h1>
      <div className="flex items-center gap-4">
        {user && (
          <button onClick={handleLogout}>
            <IoLogOutOutline className="text-2xl cursor-pointer" />
          </button>
        )}
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="toggle"
          aria-label="Toggle Theme"
        />
      </div>
    </div>
  );
}

export default Navbar;
