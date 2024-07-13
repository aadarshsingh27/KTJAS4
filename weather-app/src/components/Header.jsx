// src/components/Header.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Header = ({ onSearch, fetchWeatherData }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim()) {
      onSearch(location);
      setLocation('');
    } else {
      alert('Please enter a valid location');
    }
  };

  const handleSaveLocation = async () => {
    if (location.trim()) {
      try {
        await axios.post('http://localhost:5000/locations', { name: location }, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        fetchWeatherData(); // Fetch weather data to refresh the saved locations section
        setLocation('');
      } catch (error) {
        console.error('Error saving location:', error);
      }
    } else {
      alert('Please enter a valid location');
    }
  };

  return (
    <header>
      <nav>
        <a href="/">Home</a>
      </nav>
      <div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleSaveLocation}>Save Location</button>
      </div>
    </header>
  );
};

export default Header;
