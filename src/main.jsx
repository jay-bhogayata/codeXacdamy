// recat imports
import React from "react";
import ReactDOM from "react-dom/client";
// css import 
import "./index.css";

//recat router import 
import { BrowserRouter, Routes, Route } from "react-router-dom";

// diffrent pages import
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateRoute from "./PrivateRoute";

//auth context
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
