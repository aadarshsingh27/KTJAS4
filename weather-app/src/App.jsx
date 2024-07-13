import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import CurrentLocation from './components/CurrentLocation';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import Overview from './components/Overview';
import SavedLocations from './components/SavedLocations';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [overviewData, setOverviewData] = useState(null);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
      );
      setWeatherData(response.data);
      fetchForecastData(location);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecastData = async (location) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`
      );
      setHourlyData(response.data.forecast.forecastday[0]?.hour || []);
      setDailyData(response.data.forecast.forecastday || []);
      setOverviewData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
      setHourlyData([]);
      setDailyData([]);
      setOverviewData(null);
    }
  };

  const handleLocationClick = (location) => {
    fetchWeatherData(location);
  };

  useEffect(() => {
    fetchWeatherData('Delhi'); // Default location
  }, []);

  return (
    <div className="App">
      <Header onSearch={fetchWeatherData} fetchWeatherData={fetchWeatherData} />
      <SavedLocations onLocationClick={handleLocationClick} />
      <CurrentLocation data={weatherData} />
      <HourlyForecast data={hourlyData} />
      <DailyForecast data={dailyData} />
      <Overview data={overviewData} />
    </div>
  );
};

export default App;
