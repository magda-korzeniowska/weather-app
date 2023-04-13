import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currLocation, setCurrLocation] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocation({ latitude, longitude });
    });
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
  };

  return <div className='App'>mapa: {currLocation.latitude} {currLocation.longitude}</div>;
}

export default App;
