import React from "react";
import { FiMenu, FiSearch, } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";

function Navbar({ toggleSidebar, setSearchQuery }) {
  return (
    <nav className="flex items-center justify-between bg-pageColour p-4">
      {/* Hamburger Button (Visible on small screens) */}
      <button
        className="text-2xl md:hidden text-button mr-4"
        onClick={toggleSidebar}
      >
        <FiMenu />
      </button>

      {/* Search Bar with Search Icon */}
      <div className="flex items-center border-b-2 border-gray-300 w-full md:w-[24rem]">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Enter your search request.."
          className="bg-pageColour p-2 rounded-none w-full focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)} // Update the search query on input change
        />
      </div>

      {/* Settings Icon and Premium Button */}
      <div className="flex items-center ml-4">
        <LuSettings2 className="text-gray-500 text-xl mr-2" />
        <button className="hidden md:block bg-button text-white px-4 py-2 rounded-lg shadow-lg">
          Go to Premium
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
