import React from "react";
import RecipeCard from "../components/RecipePageComponents/RecipeCard";
import SpecialCard from "../components/RecipePageComponents/SpecialCard";
import recipes from "../data/recipeData";
import HeroSection from "../components/RecipePageComponents/HeroSection"

function Recipes({ searchQuery }) {
  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <HeroSection/>
      {/* Recipe Cards Grid */}
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe, index) =>
              recipe.special ? (
                <SpecialCard key={index} {...recipe} />
              ) : (
                <RecipeCard key={index} {...recipe} />
              )
            )
          ) : (
            <p>No recipes found</p>  
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
