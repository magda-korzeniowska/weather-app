import React, { useEffect } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import favLocations from '../data/locations.json';

const MainLocations = ({
  handleLocationChange,
  weatherData,
  favourites,
  setFavourites,
}) => {
  const saveToLocalStorage = (location) => {
    localStorage.setItem(
      'react-weather-app-favourites',
      JSON.stringify(location)
    );
  };

  useEffect(() => {
    const locationFavourites = JSON.parse(
      localStorage.getItem('react-weather-app-favourites')
    );
    if (locationFavourites && locationFavourites.length !== 0) {
      setFavourites(locationFavourites);
      console.log('useEffect', locationFavourites);
    } else {
      setFavourites(favLocations);
      saveToLocalStorage(favLocations);
    }
  }, []);

  const removeFavouriteLocation = (location) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.name !== location.name
    );
    console.log('remove', newFavouriteList);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div className='my-6 flex items-center justify-around'>
      {favourites?.map((favourite, i) => (
        <div key={i}>
          <button
            onClick={() => handleLocationChange(favourite.name)}
            className='text-lg font-medium text-white'
          >
            {favourite.name}, {favourite.country}
          </button>
          <UilTrashAlt
            size={20}
            className='mx-auto cursor-pointer text-white transition ease-out hover:scale-125'
            onClick={() => removeFavouriteLocation(favourite)}
          />
        </div>
      ))}
    </div>
  );
};

export default MainLocations;
