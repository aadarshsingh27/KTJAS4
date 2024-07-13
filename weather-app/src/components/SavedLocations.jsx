// src/components/SavedLocations.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SavedLocations = ({ onLocationClick }) => {
  const [locations, setLocations] = useState([]);

  const fetchSavedLocations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/locations', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching saved locations:', error);
    }
  };

  useEffect(() => {
    fetchSavedLocations();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/locations/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      fetchSavedLocations(); // Refresh the saved locations after deletion
    } catch (error) {
      console.error('Error deleting location:', error);
    }
  };

  return (
    <div className="saved-locations">
      {locations.map((location) => (
        <div key={location._id} className="location-card">
          <h3>{location.name}</h3>
          <button onClick={() => onLocationClick(location.name)}>View Weather</button>
          <button onClick={() => handleDelete(location._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default SavedLocations;
