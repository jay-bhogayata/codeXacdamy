import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      navigate("/");
    } catch (error) {
      setError("faild to logout");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex bg-[#f1f1f1]  flex-col w-full ">
        {error && console.log(error)}

        <div className=" mx-auto my-auto p-5 rounded-lg space-y-10">
          <img
            src={currentUser.photoURL}
            className="rounded-full mx-auto"
            alt=""
          />
          <p className="text-2xl mx-auto">email : {currentUser.email}</p>

          <button className="text-xl mx-auto mt-5 bg-[#1b1b1b]/90 text-white p-2 w-full rounded-lg">
            <Link to="/update-profile">Update Profile</Link>
          </button>
        </div>
      </div>
    </>
  );
}