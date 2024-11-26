import React from "react";
import RecipeData from "../../data/recipeData";
import CourseData from "../../data/courseData";

function HeroSection() {
  return (
    <section className="bg-pageColour p-6 rounded-lg flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <img
          className="w-32"
          src="https://cdn-icons-png.flaticon.com/512/10823/10823247.png"
          alt="Icon"
        />
        <div>
          <h1 className="text-4xl font-bold font-Berkshire">
            Only the best recipes!
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Today’s new recipes for you
          </p>
        </div>
      </div>

      <div className="flex gap-6 sm:gap-8">
        <div className="text-center">
          <p className="text-3xl font-semi-bold font-Berkshire">
            {CourseData.length}
          </p>
          <p className="text-gray-600 text-sm md:text-base">Tutorials</p>
        </div>
        {/* Vertical line */}
        <div className="border-l-2 border-gray-300 h-12 mx-4"></div>
        <div className="text-center">
          <p className="text-3xl font-semi-bold font-Berkshire">
            {RecipeData.length}
          </p>
          <p className="text-gray-600 text-sm md:text-base">Recipes</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
