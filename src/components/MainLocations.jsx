import React, { useEffect } from 'react';
import { UilTrashAlt } from '@iconscout/react-unicons';
import { Tooltip } from 'flowbite-react';
import favLocations from '../data/locations.json';

const MainLocations = ({
  handleLocationChange,
  weatherData,
  favorites,
  setFavorites,
}) => {
  const saveToLocalStorage = (location) => {
    localStorage.setItem(
      'react-weather-app-favorites',
      JSON.stringify(location)
    );
  };

  useEffect(() => {
    const locationFavorites = JSON.parse(
      localStorage.getItem('react-weather-app-favorites')
    );
    if (locationFavorites && locationFavorites.length !== 0) {
      setFavorites(locationFavorites);
      console.log('useEffect', locationFavorites);
    } else {
      setFavorites(favLocations);
      saveToLocalStorage(favLocations);
    }
  }, []);

  const removeFavoriteLocation = (location) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.name !== location.name
    );
    console.log('remove', newFavoriteList);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className='my-6 flex items-center justify-around'>
      {favorites?.map((favorite, i) => (
        <div key={i} className='flex items-center justify-around'>
          <button
            onClick={() => handleLocationChange(favorite.name)}
            className='text-lg font-medium text-white mr-2'
          >
            {favorite.name}, {favorite.country}
          </button>
          <Tooltip
            content='Remove from favorites'
            style='light'
            animation='duration-500'
          >
            <UilTrashAlt
              size={15}
              className='mx-auto cursor-pointer text-white transition ease-out hover:scale-125'
              onClick={() => removeFavoriteLocation(favorite)}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default MainLocations;
