import React, { useState } from 'react';

export default function Header({ setSearchQuery }) {
  return (
    <div className="container">
      <div className="main-section">
        <h1>F<span>oo</span>dy Z<span>o</span>ne</h1>
        <div className="search-food">
          <input
            type="text"
            placeholder='Search Food...'
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
