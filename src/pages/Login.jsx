import React from 'react'
import loginimg from "../assets/loginimg.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="flex  h-screen lg:flex-row  flex-col w-full text-[#1b1b1b]/90">
    <div className="lg:w-1/2  lg:mt-0 mt-2 flex w-full h-1/3 lg:h-screen flex-col justify-around  ">
      <h1 className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 mx-auto  mb-3 p-2">
        CodeXAcademy
      </h1>
      <img
        src={loginimg}
        alt=""
        className="lg:w-2/3 w-1/2 h-1/2 mx-auto lg:mt-0 "
      />
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto flex flex-col w-full h-1/2 lg:h-screen  lg:mt-0 mt-8 space-y-10 ">
      <div className="text lg:mt-24   flex  lg:px-10 bg-pink-2">
        
        <h1 className="text-4xl font-bold ml-14 text-[#1b1b1b]/90">Welcome back champ</h1>
        
       
      </div>
      <div className="lg:mt-28 lg:mx-24 p-4 lg:p-0 space-y-4 flex flex-col sm:p-4 ">
        
        <input
          type="email"
          className="lg:w-2/3 w-full p-2 text-xl rounded-lg border-2 border-purple-800 outline-none  text-[#1b1b1b]/90"
          placeholder="Email"
        />
        <input
          type="password"
          className="lg:w-2/3 w-full p-2 text-xl rounded-lg border-2 border-purple-800 outline-none  text-[#1b1b1b]/90"
          placeholder="Password"
        />
        <button className="bg-[#1b1b1b] text-lg text-gray-300 lg:w-2/3 w-full  p-2 rounded-lg ">
          Sign in
        </button>
        <div className="lg:mx-0   mx-auto">
          <p>
            don't have an account ?{" "}
            <a href={'/signup'} className="ml-3 text-blue-700 underline">
                Sign up
            </a>
          </p>
        </div>
        <p className="lg:w-2/3 w-full  p-2 rounded-lg text-xl flex">
          <span className="mx-auto">or</span>
        </p>
        <div className="space-y-6">
          <button
            className="lg:w-2/3 w-full bg-red-700  border-[2px] border-gray-50 p-2 rounded-lg text-xl flex justify-around
          "
          >
            <FaGoogle className="text-white my-auto" />
            <p className="text-gray-100"> Sign in with Google</p>
          </button>
          <button
            className="lg:w-2/3 w-full bg-stone-800  border-[2px] border-gray-50 p-2 rounded-lg text-xl flex justify-around
          "
          >
            <FaGithub className="text-white my-auto" />
            <p className="text-gray-100"> Sign in with Github</p>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login