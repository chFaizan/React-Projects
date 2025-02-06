import React, { useState, useEffect } from "react";
import Header from "./Header";
export default function Card() {
  const API = "https://dummyjson.com/recipes";
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchApi = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header setSearchQuery={setSearchQuery} /> 
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="card-main-section">
            <div className="card-section">
              <div className="left-section">
                <img src={recipe.image} alt="" />
              </div>
              <div className="right-section">
                <h3>{recipe.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ducimus.</p>
                <div className="btn-price">
                  Rating is: {recipe.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
