import React, { useEffect, useState } from 'react';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './App.css';
import MainLocations from './components/MainLocations';

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
    <div className='mx-auto mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 max-w-screen-lg'>
      {/* {data.main && (
        <p>pogoda {data.main.temp}</p>
      )} */}
      <MainLocations />
    </div>
  );
}

export default App;
