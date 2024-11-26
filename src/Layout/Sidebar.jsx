import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import {
  IoClose,
  IoHome,
  IoHeart,
  IoBookmark,
  IoPeople,
} from "react-icons/io5";
import { SiIfood } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Sidebar({ isSidebarOpen, toggleSidebar, user }) {
  const [activeTab, setActiveTab] = useState("recipes");
  const navigate = useNavigate();

  const handleTabChange = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
    if (isSidebarOpen) {
      toggleSidebar(); // Close the sidebar after navigating
    }
  };

  return (
    <>
      {/* Overlay background when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-700 bg-opacity-80 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white shadow-md h-screen p-4 z-50">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="logo flex items-center space-x-2 font-normal text-2xl mb-8 font-poppins">
            <h1>Food</h1>
            <SiIfood />
          </div>
          <img
            src={user.photo}
            alt="User Profile"
            className="w-16 h-16 border-2 border-button p-1 rounded-full object-cover"
          />
          <h3 className="mt-2 font-Berkshire">{user.name}</h3>
          <span className="text-gray-500 font-poppins text-sm">
            {user.role}
          </span>
          <span className="bg-white p-[1px] px-[18px] mt-5 rounded-[14px] shadow-md flex items-center space-x-2">
            <FaHeart className="text-button w-4 h-4" />
            <span>45</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="mt-28 space-y-4 self-center">
          <li>
            <button
              onClick={() => handleTabChange("recipes", "/")}
              className={`flex items-center text-lg rounded-md transition-colors ${
                activeTab === "recipes" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoHome className="mr-3" />
              Recipes
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("favorites", "/favorites")}
              className={`flex items-center text-lg rounded-md transition-colors ${
                activeTab === "favorites" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoHeart className="mr-3" />
              Favorites
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("courses", "/courses")}
              className={`flex items-center text-lg rounded-md transition-colors ${
                activeTab === "courses" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoBookmark className="mr-3" />
              Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("community", "/community")}
              className={`flex items-center text-lg rounded-md transition-colors ${
                activeTab === "community" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoPeople className="mr-3" />
              Community
            </button>
          </li>
        </ul>

        {/* Footer */}
        <div className="mt-auto">
          <div className="relative flex items-center justify-center mt-6">
            {/* images in the footer */}
            <div className="absolute bottom-1 flex items-center ">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Profile 1"
                className="w-[40px] h-[40px] rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile 2"
                className="w-[50px] h-[50px] rounded-full border-2 ml-[-15px] border-white"
              />
              <button className="text-2xl ml-[-15px] text-white bg-button border-2  rounded-full w-[40px] h-[40px] flex justify-center">
                +
              </button>
            </div>
          </div>

          <p className="text-center font-semibold text-sm text-gray-700 mt-2">
            Create a team and take part in{" "}
            <a className="underline" href="#">
              Tv show!
            </a>
          </p>
        </div>
      </aside>

      {/* Sidebar for Mobile view */}
      <div
        className={`fixed top-0 left-0 w-64 bg-white h-full shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        {/* Close Button */}
        <button
          className="text-2xl absolute top-4 right-4 text-button"
          onClick={toggleSidebar}
        >
          <IoClose />
        </button>

        {/* Profile */}
        <div className="flex flex-col items-center mt-10">
          <img
            src={user.photo}
            alt="User Profile"
            className="w-16 h-16 border-2 border-button p-1 rounded-full object-cover"
          />
          <h3 className="mt-2 font-Berkshire">{user.name}</h3>
          <span className="text-gray-500 text-sm">{user.role}</span>
          <span className="bg-white p-[1px] px-[18px] mt-5 rounded-[14px] shadow-md flex items-center space-x-2">
            <FaHeart className="text-button w-4 h-4" />
            <span>45</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="mt-20 flex flex-col ml-[45px]">
          <li>
            <button
              onClick={() => handleTabChange("recipes", "/")}
              className={`flex items-center text-lg font-poppins p-3 rounded-md transition-colors ${
                activeTab === "recipes" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoHome className="mr-3" />
              Recipes
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("favorites", "/favorites")}
              className={`flex items-center text-lg p-3 font-poppins rounded-md transition-colors ${
                activeTab === "favorites" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoHeart className="mr-3" />
              Favorites
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("courses", "/courses")}
              className={`flex items-center text-lg p-3 font-poppins rounded-md transition-colors ${
                activeTab === "courses" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoBookmark className="mr-3" />
              Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => handleTabChange("community", "/community")}
              className={`flex items-center text-lg p-3 font-poppins rounded-md transition-colors ${
                activeTab === "community" ? "text-button" : "text-gray-700"
              }`}
            >
              <IoPeople className="mr-3" />
              Community
            </button>
          </li>
        </ul>

        {/* Footer */}
        <div className="absolute bottom-32">
          <div className="relative flex items-center justify-center mt-6">
            {/* footer images */}
            <div className="absolute bottom-1 flex items-center ">
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Profile 1"
                className="w-[40px] h-[40px] rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile 2"
                className="w-[50px] h-[50px] rounded-full border-2 ml-[-15px] border-white"
              />
              <button className="text-2xl ml-[-15px] text-white bg-button border-2  rounded-full w-[40px] h-[40px] flex justify-center">
                +
              </button>
            </div>
          </div>

          <p className="text-center font-semibold text-sm text-gray-700 mt-2">
            Create a team and take part in{" "}
            <a className="underline" href="#">
              Tv show!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
