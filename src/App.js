import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [currLocation, setCurrLocation] = useState({});
  const [data, setData] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocation({ latitude, longitude });
    });
    await fetch(
      `${apiURL}/weather?lat=${currLocation.latitude}&lon=${currLocation.longitude}&APPID=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result)
      })
  };

  return (
    <div className='App'>
      {data.main && (
        <p>pogoda {data.main.temp}</p>
      )}
    </div>
  );
}

export default App;
