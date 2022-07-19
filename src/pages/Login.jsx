import React from "react";
import loginimg from "../assets/loginimg.svg";

const Login = () => {
  return (
    <div className="flex  h-screen lg:flex-row  flex-col w-full">
      <div className="lg:w-1/2  flex w-full h-1/3 lg:h-screen">
        <img src={loginimg} alt="" className="w-2/3 mx-auto lg:mt-0 mt-2" />
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col w-full h-1/2 lg:h-screen  lg:mt-0 mt-8 space-y-10">
        <div className="text lg:mt-28 space-y-4  mx-auto  px-10 ">
          <h1 className="text-4xl font-bold  ">Don't think</h1>
          <h1 className="text-4xl font-bold  ">
            Start your codnig journey tody . . .
          </h1>
        </div>
        <div className="lg:mt-28 lg:mx-24 p-4 lg:p-0 space-y-4 flex flex-col sm:p-4 ">
          <input
            type="text"
            className="lg:w-2/3 w-full p-2 text-xl rounded-lg border-2 border-purple-800 outline-none bg-[#0D1117]/80 text-gray-400"
            placeholder="Name"
          />
          <input
            type="email"
            className="lg:w-2/3 w-full p-2 text-xl rounded-lg border-2 border-purple-800 outline-none bg-[#0D1117]/80 text-gray-400"
            placeholder="Email"
          />
          <input
            type="password"
            className="lg:w-2/3 w-full p-2 text-xl rounded-lg border-2 border-purple-800 outline-none bg-[#0D1117]/80 text-gray-400"
            placeholder="Password"
          />
          <button className="lg:w-2/3 w-full bg-purple-600 p-2 rounded-lg text-xl ">
            Sign up
          </button>

          <p className="lg:w-2/3 w-full  p-2 rounded-lg text-xl flex">
            <span className="mx-auto">or</span>
          </p>
          <div className="space-y-6">
            <button className="lg:w-2/3 w-full bg-red-700  border-[2px] border-gray-50 p-2 rounded-lg text-xl ">
              Sign up with Google
            </button>
            <button className="lg:w-2/3 w-full bg-blue-700  border-[2px] border-gray-50 p-2 rounded-lg text-xl ">
              Sign up with Facebook
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
