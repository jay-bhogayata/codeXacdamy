import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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
      <div className="flex bg-[#f1f1f1] h-screen flex-col w-full">
        {error && console.log(error)}
        <div className="bg-purple-500 mx-auto my-auto p-5 rounded-lg">
          <p className="text-2xl mx-auto">email : {currentUser.email}</p>

          <p className="text-xl mx-auto mt-5">
            <Link to="/update-profile">Update Profile</Link>
          </p>
          <button
            className="px-5 py-2 mt-4 w-full   bg-slate-700 mx-auto rounded-xl text-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
