import React from 'react';

const CurrentLocation = ({ data }) => {
  if (!data) { return <div>Loading...</div>; // or any loading state
}

const { location, current } = data;

if (!location || !current) {
  return <div>Error loading data</div>; // Handle case when data is incomplete
}

  return (
    <div className="current-location">
      <h2>{data.location.name}</h2>
      <p>{data.current.condition.text}</p>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Humidity: {data.current.humidity}%</p>
      <p>Wind Speed: {data.current.wind_kph} kph</p>
      <p>Date: {new Date(data.location.localtime).toLocaleString()}</p>
    </div>
  );
};

export default CurrentLocation;
