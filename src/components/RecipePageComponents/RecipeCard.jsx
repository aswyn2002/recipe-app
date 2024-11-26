import React from "react";
import { FaDrumstickBite, FaCarrot, FaFish } from "react-icons/fa";

function RecipeCard({ title, difficulty, time, kcal, type, rating, image }) {
  // Function to render star ratings
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${i <= rating ? "text-button" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.25l3.3 6.69 7.39 1.08-5.35 5.22 1.26 7.36-6.6-3.46-6.6 3.46 1.26-7.36-5.35-5.22 7.39-1.08L12 2.25z" />
        </svg>
      );
    }
    return stars;
  };

  // Function to get the type-specific icon
  const getTypeIcon = () => {
    if (type.toLowerCase() === "meat")
      return <FaDrumstickBite size={24} className="text-button" />;
    if (type.toLowerCase() === "veg")
      return <FaCarrot size={24} className="text-green-600" />;
    if (type.toLowerCase() === "fish")
      return <FaFish size={24} className="text-blue-600" />;
    return null;
  };

  return (
    <div className="card w-72 mt-8 bg-white shadow-md rounded-[15px] transition-transform transform hover:-translate-y-2 duration-300 group group hover:shadow-button">
      {/* Card Header */}
      <div className="p-6 rounded-t-[15px] relative text-center">
        {/* Dish Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={image}
            alt={title}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Card Content */}
        <div className="mt-12">
          <h3 className="text-lg md:text-xl font-bold ">{title}</h3>
          <p
            className={`text-xs mt-3 md:text-sm ${
              difficulty === "Beginner"
                ? "text-green-600 bg-green-50"
                : difficulty === "Intermediate"
                ? "text-yellow-500 bg-yellow-50"
                : "text-red-500 bg-red-50"
            } justify-self-center py-[2px] px-[11px] rounded-[6px] w-min`}
          >
            {difficulty}
          </p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-col items-center mt-4">
              <span className="text-lg md:text-lg font-bold font-poppins">
                {time}
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-poppins">
                Min
              </span>
            </div>

            {/* Vertical line */}
            <div className="border-l-2 border-gray-100 h-12 mx-4"></div>

            <div className="flex flex-col items-center mt-4">
              <span className="text-lg md:text-lg font-bold font-poppins">
                {kcal}
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-poppins">
                Kcal
              </span>
            </div>
            <div className="border-l-2 border-gray-100 h-12 mx-4"></div>

            <div className="flex flex-col items-center mt-4">
              <span className="text-xs md:text-sm">{getTypeIcon()}</span>
              <span className="text-xs md:text-sm text-gray-600 font-poppins">
                {type}
              </span>
            </div>
          </div>

          {/* Star Ratings */}
          <div className="flex justify-center items-center mt-4 space-x-1">
            {renderStars()}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div>
        <button className="bg-white text-black border-t-2 border-gray-300 px-4 py-2 rounded-b-[15px] text-sm md:text-base w-full group-hover:bg-button group-hover:text-white transition duration-300">
          Start Cooking
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
