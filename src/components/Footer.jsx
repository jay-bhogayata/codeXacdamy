import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#fff] text-[#1b1b1b]/90 w-full">
      <footer className="lg:mx-32 p-5   ">
        <div className="w-full p-3">
          <h1 className="text-2xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
            CodeXAcademy
          </h1>
          <p className="text-xl font-bold text-gray-800/95">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="text-md font-semibold text-gray-800/95">copyright &copy; codeXacademy All rights reserved</p>
        </div>
        <div className="grid lg:grid-cols-4  mt-5 p-3 ">
          <div className="space-y-1 mt-5">
            
            <p className="text-2xl font-bold text-gray-800/95 mb-3">Products</p>
            <p className="text-md font-semibold text-gray-800/95">codexacademy App</p>
            <p className="text-md font-semibold text-gray-800/95">codexacademy pro App</p>
            <p className="text-md font-semibold text-gray-800/95">resume builder</p>
            <p className="text-md font-semibold text-gray-800/95">code playground <sup>coming soon</sup></p>
          </div>
          <div className="space-y-1 mt-5">
            
            <p className="text-2xl font-bold text-gray-800/95 mb-3">Company</p>
            <p className="text-md font-semibold text-gray-800/95">contect</p>
            <p className="text-md font-semibold text-gray-800/95">Login/signup</p>
            <p className="text-md font-semibold text-gray-800/95">Terms of Service</p>
            <p className="text-md font-semibold text-gray-800/95">Pricing Policy </p>
          </div>
          <div className="space-y-1 mt-5">
            
            <p className="text-2xl font-bold text-gray-800/95 mb-3">Resources</p>
            <p className="text-md font-semibold text-gray-800/95">courses</p>
            <p className="text-md font-semibold text-gray-800/95">Free Courses</p>
            <p className="text-md font-semibold text-gray-800/95">Books</p>
            <p className="text-md font-semibold text-gray-800/95">Learning paths</p>
          </div>
          <div className="space-y-1 mt-5">
            
            <p className="text-2xl font-bold text-gray-800/95 mb-3">Social</p>
            <p className="text-md font-semibold text-gray-800/95">Instagram</p>
            <p className="text-md font-semibold text-gray-800/95">Facebook</p>
            <p className="text-md font-semibold text-gray-800/95">twitter</p>
            <p className="text-md font-semibold text-gray-800/95">Linkdin</p>
          </div>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
