import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

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
    <div>
      <nav className="bg-[#f1f1f1] text-black">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between w-full">
              <div className="flex-shrink-0 ">
                <h1 className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800">
                  CodeXAcademy
                </h1>
              </div>
              <div className="hidden md:block   ">
                <div className="ml-10 flex items-baseline  space-x-4">
                  <a
                    href="#"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className=" hover:text-purple-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    Learnning paths
                  </a>

                  <a
                    href="#"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-md font-medium"
                  >
                    blog
                  </a>

                  <a
                    href="#"
                    className="hover:text-purple-600 px-3 py-2 rounded-md text-md font-semibold"
                  >
                    Contect us
                  </a>
                  {currentUser !== null ? (
                    <a
                      onClick={handleLogout}

                      className= "cursor-pointer text-gray-300 bg-[#1b1b1b] px-3 py-2 rounded-md text-md font-semibold hover:text-purple-600"
                    >
                      Logout
                    </a>
                  ) : (
                    <a
                      href="/login"
                      className="text-gray-300 bg-[#1b1b1b] px-3 py-2 rounded-md text-md font-semibold hover:text-purple-600"
                    >
                      Login
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div refs={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Learnning paths
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  blog
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contect us
                </a>
                
                {currentUser !== null ? (
                    <a
                      onClick={handleLogout}

                      className= "cursor-pointer block px-3 bg-[#1b1b1b] text-center text-gray-200 py-2 rounded-md text-base font-medium"
                    >
                      Logout
                    </a>
                  ) : (
                    <a
                      href="/login"
                      className="block px-3 bg-[#1b1b1b] text-center text-gray-200 py-2 rounded-md text-base font-medium"
                    >
                      Login
                    </a>
                  )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
