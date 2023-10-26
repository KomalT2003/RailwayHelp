// pages/index.js
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/searchbar';

const Home = () => {
  const [stations, setStations] = useState([]);

  const handleSearch = async (location) => {
    // Use Google Maps Places API to fetch nearby railway stations based on the 'location'.
    // You should replace 'YOUR_API_KEY' with your actual Google Maps API key.
    const apiKey = 'api-key';
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=5000&type=train_station&key=${apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      const stations = data.results.map((result) => ({
        name: result.name,
        distance: result.vicinity,
      }));
      setStations(stations);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title className="text-2xl font-extrabold tracking-tight text-gray-900">Railway Station Finder</title>
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold tracking-tight text-cyan-500 mt-10 mb-4">🚇 Railway Station Finder</h1>
        <SearchBar onSearch={handleSearch} />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold tracking-tight text-cyan-600 mt-10 mb-4 ml-5">Nearby Railway Stations</h2>
          <ul>
            {stations.map((station, index) => (
              <li key={index} className="mt-2">
                <strong>{station.name}</strong> - {station.distance}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
