import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import InputBar from './components/InputBar';
import MainLocations from './components/MainLocations';
import TimeAndLocation from './components/TimeAndLocation';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const apiURL = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    });
  };

  const fetchWeather = async () => {
    await fetch(
      // `${apiURL}/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&APPID=${apiKey}&units=metric`
      `${apiURL}/data/2.5/weather?q=${location}&APPID=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => err.message);
    setLocation('');

    // navigator.geolocation.getCurrentPosition((position) => {
    //   const { latitude, longitude } = position.coords;
    //   setLocation({ latitude, longitude });
    // });
  };

  // 'https://api.openweathermap.org/data/2.5'
  //https://api.openweathermap.org/geo/1.0/direct?q=Warszawa&appid=fd82c2969784e8b06b8a11679b9aa30d

  // const searchLocation = (event) => {
  //   if (event.key === 'Enter') {
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  //     setLocation('')
  //   }
  // }

  return (
    <div className='mx-auto mt-4 h-fit max-w-screen-lg bg-gradient-to-br from-cyan-700 to-blue-700 px-32 py-5 shadow-xl shadow-gray-400'>
      {console.log(location)}
      <MainLocations />
      <InputBar
        location={location}
        handleKeyDown={handleKeyDown}
        handleLocationChange={handleLocationChange}
        getWeather={fetchWeather}
        handleLocationSearch={handleLocationSearch}
      />
      <TimeAndLocation />
      <Weather />
      <Forecast />
    </div>
  );
}

export default App;
