import React from 'react';
import "../App.css";

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className="category-selection-container">
      {["All", ...categories].map((category, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(category === "All" ? null : category)}
          className={`category-button ${activeCategory === category ? 'active' : ''}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
