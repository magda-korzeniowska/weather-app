import React from 'react';
import { UilMapMarker, UilSearch } from '@iconscout/react-unicons';

const InputBar = ({
  location,
  handleKeyDown,
  handleLocationChange,
  handleLocationSearch,
  fetchWeather,
}) => {
  return (
    <div className='my-6 flex flex-row justify-center'>
      <div className='flex w-3/4 flex-row items-center justify-center space-x-3'>
        <input
          value={location}
          onChange={handleLocationChange}
          onKeyDown={handleKeyDown}
          type='text'
          className='w-full p-2 text-xl font-light capitalize shadow-xl placeholder:lowercase focus:outline-transparent'
          placeholder='Find location...'
        />
        <UilSearch
          size={40}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
          onClick={fetchWeather}
        />
        <UilMapMarker
          size={40}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
          onClick={handleLocationSearch}
        />
      </div>
      <div className='flex w-1/4 flex-row items-center justify-center'>
        <button name='metric' className='text-3xl font-normal text-white transition ease-out hover:scale-125'>
          °C
        </button>
        <p className='mx-2 text-3xl text-white'>|</p>
        <button name='imperial' className='text-3xl font-normal text-white transition ease-out hover:scale-125'>
          °F
        </button>
      </div>
    </div>
  );
};

export default InputBar;
