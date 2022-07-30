import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Laern from "../assets/Learn.svg";
import google from "../assets/google.svg";
import aws from "../assets/aws.svg";
import microsoft from "../assets/microsoft.svg";
import zoho from "../assets/zoho.svg";
import zomato from "../assets/zomato.svg";
import think from "../assets/think.svg";
import { Link } from "react-router-dom";

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
          <Link to="/signup">
            <button
              href={"/signup"}
              className="bg-[#1b1b1b] text-lg text-gray-300 p-3 rounded-xl mt-8 text-center w-full"
            >
              Start Learnning Today
            </button>
          </Link>
        </div>
        <div className="lg:w-1/2 lg:h-1/2 w-full  flex  justify-center p-5 md:p-20 lg:px-36">
          <img src={Laern} alt="" className="lg:w-full " />
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-[#f1f1f1]   flex lg:flex-row flex-col text-black p-3">
        <div
          className="w-full   lg:mx-32 
        rounded-3xl mb-10 flex lg:flex-row flex-col lg:space-y-0 space-y-1 "
        >
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
          className="w-full lg:p-6 p-2 lg:mx-32 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500
        rounded-2xl mb-10 flex lg:space-x-3 flex-col lg:space-y-0 space-y-3 lg:flex-row"
        >
          <div className="bg-pink- lg:w-1/2 w-full lg:p-4">
            <p className="text-3xl font-bold text-[#1b1b1b] p-4 lg:w-2/3 leading-10 ">
              We add value to our student's journey
            </p>
            <p className="text-md font-semibold text-[#1b1b1b] p-4 lg:w-2/3 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio quod eum culpa dicta laboriosam. Adipisci
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

      {/* section 4 */}
      <div className="bg-[#f1f1f1] flex lg:flex-row flex-col text-black p-3">
        <div
          className="w-full  p-4 lg:mx-32 
        rounded-3xl mb-10 flex  flex-col lg:space-y-0 space-y-3 "
        >
          <p className="text-3xl font-bold text-[#1b1b1b]/90 mb-10">
            We'll help you learn what you like
          </p>
          <div className=" flex   lg:space-x-10 lg:flex-row flex-col lg:space-y-0 space-y-8">
            <div className=" lg:w-2/5 space-y-2 ">
              <span className="text-4xl font-bold text-blue-400">01</span>
              <p className="text-2xl font-bold text-[#1b1b1b]/90">
                Learn at your own pace
              </p>
              <p className="text-md font-semibold text-gray-600/95">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio quod eum culpa dicta laboriosam. Adipisci
              </p>
            </div>
            <div className="lg:w-2/5 space-y-2 ">
              <span className="text-4xl font-bold text-blue-400">02</span>
              <p className="text-2xl font-bold text-[#1b1b1b]/90">
                Learn from industry experts
              </p>
              <p className="text-md font-semibold text-gray-600/95">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio quod eum culpa dicta laboriosam. Adipisci
              </p>
            </div>

            <div className="lg:w-2/5 space-y-2 ">
              <span className="text-4xl font-bold text-blue-400">03</span>
              <p className="text-2xl font-bold text-[#1b1b1b]/90">
                Large course library
              </p>
              <p className="text-md font-semibold text-gray-600/95">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio quod eum culpa dicta laboriosam. Adipisci
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className="bg-[#f1f1f1] flex flex-col text-black p-3">
        <p className="lg:mx-36 p-3 text-3xl text-[#1b1b1b]/90 font-bold">
          Our student's work at
        </p>
        <div className="flex lg:flex-row flex-wrap lg:mx-32 lg:mt-14   lg:space-y-0 mt-10 ">
          <img
            src={google}
            alt=""
            className="lg:w-1/4 w-2/5 mx-auto lg:px-10 p-2"
          />
          <img
            src={microsoft}
            alt=""
            className="lg:w-1/4 w-2/5 mx-auto lg:px-10 p-2"
          />

          <img
            src={zomato}
            alt=""
            className="lg:w-1/4 w-2/5 mx-auto lg:px-10 p-2"
          />
          <img
            src={zoho}
            alt=""
            className="lg:w-1/4 w-2/5 mx-auto lg:px-10 p-2"
          />
        </div>
      </div>

      {/* section 6 */}
      <div className="bg-[#f1f1f1]  flex lg:flex-row flex-col text-black p-3">
        <div className="lg:mx-36 flex lg:flex-row flex-col w-full mt-10">
          <div className="p-2 lg:w-1/2 mx-auto my-auto">
            <img src={think} alt="" className="p-3 lg:w-2/3" />
          </div>
          <div className=" p-2 lg:w-1/2">
            <p className="p-3 my-2 text-3xl  text-[#1b1b1b]/90 font-bold">
              {" "}
              Don't think start Learnning today
            </p>
            <p className="p-3 text-xl font-semibold text-gray-600/95 mb-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              assumenda reprehenderit perspiciatis rem iusto odit.
            </p>
            <Link to="/signup">
              <button className="bg-[#1b1b1b] text-lg text-gray-300 p-3 rounded-xl  lg:w-1/3 lg:mx-3 ml-3 ">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
