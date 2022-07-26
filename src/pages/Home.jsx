import React from "react";
import Navbar from "../components/Navbar";
import Laern from "../assets/Learn.svg";
import { BsFillLaptopFill } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      {/* section 1 */}
      <div className="bg-[#f1f1f1]   flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:h-1/2 w-full flex flex-col justify-center p-5 md:p-20 lg:px-36 space-y-10">
          <h1 className="text-5xl font-bold text-[#1b1b1b] leading-sung">
            Leran new coding skills from top coders
          </h1>
          <p className="text-xl font-bold text-gray-600/95 ">
            High Quality Course at Affordable prices. We are latest in tech and
            highest in quality.
          </p>
          <button className="bg-[#1b1b1b] text-lg text-gray-300 p-3 rounded-xl mt-8">
            Start Learnning Today
          </button>
        </div>
        <div className="lg:w-1/2 lg:h-1/2 w-full flex flex-col justify-center p-5 md:p-20 lg:px-36">
          <img src={Laern} alt="" />
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-[#f1f1f1]   flex lg:flex-row flex-col text-black">
        <div className="lg:h-1/2 w-full flex lg:flex-row flex-col p-5  md:p-20 lg:px-36 lg:space-x-20 space-y-8 justify-center ">
          <p className="text-4xl font-bold text-[#1b1b1b] lg:w-1/3 flex my-auto p-5 leading-10 mt-5">
            Our numbers tells more about us
          </p>
          <p className="text-2xl font-bold text-gray-600/95 p-5 lg:w-1/4 leading-10">
            <span className="text-4xl font-bold text-blue-400">15k +</span>
            <br />
            Toatl Lernres
          </p>
          <p className="text-2xl font-bold text-gray-600/95 p-5 lg:w-1/4 leading-10">
            <span className="text-4xl font-bold text-blue-400">1.5k +</span>
            <br />
            Lernres added in last month
          </p>
          <p className="text-2xl font-bold text-gray-600/95 p-4 lg:w-1/4 leading-10 ">
            <span className="text-4xl font-bold text-blue-400">10 M+</span>
            <br />
            Total video watching time
          </p>
        </div>
      </div>

      {/* section 3 */}
      <div className="bg-[#f1f1f1] flex lg:flex-row flex-col text-black p-3 ">
        <div
          className="w-full lg:p-10 p-2 lg:mx-36 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
        rounded-2xl mb-10 flex lg:space-x-3 flex-col lg:space-y-0 space-y-3 lg:flex-row"
        >
          <div className="bg-pink- lg:w-1/2 w-full lg:p-4">
            <p className="text-3xl font-bold text-[#1b1b1b] p-4 lg:w-2/3 leading-10 ">
              We add value to our student's journey
            </p>
            <p className="text-md font-semibold text-[#1b1b1b] p-4 lg:w-2/3 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quod eum culpa dicta laboriosam. Adipisci 
            </p>
            <button className="bg-[#1b1b1b] text-lg text-gray-300 p-3 rounded-xl mt-8 ml-3">
              Learn more
            </button>
          </div>
          <div className=" lg:w-1/2 w-full p-2  flex flex-wrap ">
            <div className="space-y-2 lg:p-6 p-2 w-1/2">
              <BsFillLaptopFill className="text-4xl p-1 rounded-lg bg-gray-50 " />

              <p className="text-lg font-bold text-[#1b1b1b]/90 ">
                Online classes
              </p>
              <p className="text-sm font-semibold text-gray-300 ">
                Online classes from the best coders
              </p>
            </div>
            <div className="space-y-2  lg:p-6 p-2 w-1/2">
              <BsFillLaptopFill className="text-4xl p-1 rounded-lg bg-gray-50 " />

              <p className="text-lg font-bold text-[#1b1b1b]/90 ">
                Online classes
              </p>
              <p className="text-sm font-semibold text-gray-300 ">
                Online classes from the best coders
              </p>
            </div>
            <div className="space-y-2 lg:p-6 p-2 w-1/2">
              <BsFillLaptopFill className="text-4xl p-1 rounded-lg bg-gray-50 " />

              <p className="text-lg font-bold text-[#1b1b1b]/90 ">
                Online classes
              </p>
              <p className="text-sm font-semibold text-gray-300 ">
                Online classes from the best coders
              </p>
            </div>
            <div className="space-y-2 lg:p-6 p-2 w-1/2">
              <BsFillLaptopFill className="text-4xl p-1 rounded-lg bg-gray-50 " />

              <p className="text-lg font-bold text-[#1b1b1b]/90 ">
                Online classes
              </p>
              <p className="text-sm font-semibold text-gray-300 ">
                Online classes from the best coders
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
