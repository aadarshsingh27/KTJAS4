import React from 'react';

const HourlyForecast = ({ data }) => {
  if (!data || !data.length) return null;

  return (
    <div className="hourly-forecast">
      {data.map((hour, index) => (
        <div key={index} className="hour">
          <p>{hour.time}</p>
          <p>{hour.condition.text}</p>
          <p>Temperature: {hour.temp_c}°C</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
