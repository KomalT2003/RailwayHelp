// components/SearchBar.js
"use client";
// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <div className="bg-gray-900 p-4">
      <input
        type="text"
        className="w-full p-2 bg-gray-700 text-white rounded-md"
        placeholder="Enter your location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="mt-2 bg-yellow-400 text-white p-2 rounded-md hover:bg-yellow-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
