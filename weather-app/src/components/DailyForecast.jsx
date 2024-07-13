import React from 'react';

const DailyForecast = ({ data }) => {
  if (!data || !data.length) return null;

  return (
    <div className="daily-forecast">
      {data.map((day, index) => (
        <div key={index} className="day">
          <p>{day.date}</p>
          <p>{day.day.condition.text}</p>
          <p>Temperature: {day.day.avgtemp_c}°C</p>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast;
