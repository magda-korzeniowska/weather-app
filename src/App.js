import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import InputBar from './components/InputBar';
import MainLocations from './components/MainLocations';
import TimeAndLocation from './components/TimeAndLocation';
import Weather from './components/Weather';
import getFormattedData from './utils/weatherService';

function App() {
  const [query, setQuery] = useState({ q: 'bydgoszcz' });
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState(null);

  const handleLocationChange = (location) => {
    setQuery({ q: location });
  };

  const handleUnitsChange = (selectedUnits) => {
    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedData({ ...query, units }).then((data) =>
        setWeatherData(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    const tempStep = units === 'metric' ? 24 : 75;
    if (!weatherData) return 'from-cyan-700 to-blue-700';
    return weatherData.temp <= tempStep
      ? 'from-cyan-700 to-blue-700'
      : 'from-yellow-700 to-orange-700';
  };

  return (
    <div className={`mx-auto mt-4 h-fit max-w-screen-lg bg-gradient-to-br px-32 py-5 shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <MainLocations handleLocationChange={handleLocationChange} />
      <InputBar
        handleLocationChange={handleLocationChange}
        handleLocationSearch={handleLocationSearch}
        handleUnitsChange={handleUnitsChange}
      />

      {weatherData && (
        <>
          {console.log(weatherData)}
          <TimeAndLocation weatherData={weatherData} />
          <Weather weatherData={weatherData} units={units} />
          <Forecast
            title='3-HOUR FORECAST FOR TODAY'
            weatherData={weatherData.hourly}
          />
        </>
      )}
    </div>
  );
}

export default App;
