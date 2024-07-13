import React from 'react';

const CurrentLocation = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // or any loading state
  }

  const { location, current } = data;

  if (!location || !current || !current.condition) {
    return <div>Error loading data</div>; // Handle case when data is incomplete
  }

  return (
    <div className="current-location">
      <h2>{location.name}</h2>
      <p>{current.condition.text}</p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind Speed: {current.wind_kph} kph</p>
      <p>Date: {new Date(location.localtime).toLocaleString()}</p>
    </div>
  );
};

export default CurrentLocation;
