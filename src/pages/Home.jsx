import React from "react";
import Navbar from "../components/Navbar";
import Laern from "../assets/Learn.svg";


const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* section1  */}
      <div className="bg-[#f1f1f1]   flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:h-1/2 w-full flex flex-col justify-center p-5 md:p-20 lg:px-36 space-y-10">
          <h1
          className="text-5xl font-bold text-[#1b1b1b] leading-sung"
          >Leran new coding skills from top coders</h1>
          <p
          className="text-xl font-bold text-gray-600/95 "
          >
            High Quality Course at Affordable prices. We are latest in tech and
            highest in quality.
          </p>
          <button className="bg-[#1b1b1b] text-lg text-gray-300 p-3 rounded-xl mt-8">
            Start Learnning Today
          </button>
        </div>
        <div className="lg:w-1/2 lg:h-1/2 w-full flex flex-col justify-center p-5 md:p-20 lg:px-36" >
          <img src={Laern} alt="" />
        </div>
        

        
      </div>
      <div>
        <p></p>
      </div>

       
    </div>
  );
};

export default Home;
