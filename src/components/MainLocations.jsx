import React, { useEffect, useState } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';

const locations = [
  {
    id: 1,
    name: 'Bydgoszcz',
    country: 'PL',
  },
  {
    id: 2,
    name: 'Warsaw',
    country: 'PL',
  },
  {
    id: 3,
    name: 'Barcelona',
    country: 'ES',
  },
  {
    id: 4,
    name: 'Lisbon',
    country: 'PT',
  },
  {
    id: 5,
    name: 'Funchal',
    country: 'PT',
  },
];

const MainLocations = ({ handleLocationChange, weatherData }) => {
  const [favourites, setFavourites] = useState([]);

  const { name, country, lat, lon } = weatherData;

  useEffect(() => {
    const locationFavourites = JSON.parse(
      localStorage.getItem('react-weather-app-favourites')
    );
    if (locationFavourites.length !== 0) {
      setFavourites(locationFavourites);
      console.log(locationFavourites)
    } else {
      setFavourites(locations);
    }
  }, []);


  const saveToLocalStorage = (location) => {
    localStorage.setItem(
      'react-weather-app-favourites',
      JSON.stringify(location)
    );
  };

  const addFavouriteLocation = (location) => {
    const newFavouriteList = [...favourites, location];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteLocation = (location) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.name !== location.name
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='my-6 flex items-center justify-around'>
      {favourites.map((favourite) => (
        <div key={favourite.id}>
          <button
            onClick={() => handleLocationChange(favourite.name)}
            className='text-lg font-medium text-white'
          >
            {favourite.name}, {favourite.country}
          </button>
          <UilTrashAlt
            size={40}
            className='cursor-pointer text-white transition ease-out hover:scale-125'
            onClick={() => removeFavouriteLocation(favourite)}
          />
        </div>
      ))}
    </div>
  );
};

export default MainLocations;
