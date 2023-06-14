import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { UilFavorite, UilMapMarker, UilSearch } from '@iconscout/react-unicons';
import { Tooltip } from 'flowbite-react';

const InputBar = ({
  handleLocationChange,
  handleLocationSearch,
  handleUnitsChange,
}) => {
  const [location, setLocation] = useState('');

  const handleSearchClick = () => {
    if (location !== '') {
      handleLocationChange(location);
      setLocation('');
    }
  };

  const handleKeyDown = (e) => {
    if (location !== '' && e.key === 'Enter') {
      handleLocationChange(location);
      setLocation('');
    }
  };

  const handleUnitsClick = (e) => {
    const selectedUnits = e.target.name;
    handleUnitsChange(selectedUnits);
    toast.info('Changing units', { autoClose: 2000 });
  };

  return (
    <div className='my-6 flex flex-row justify-center'>
      <div className='flex w-4/5 flex-row items-center justify-center space-x-3'>
        <input
          onKeyDown={handleKeyDown}
          type='text'
          className='w-full p-2 text-xl font-light capitalize shadow-xl placeholder:lowercase focus:outline-transparent'
          placeholder='Find location...'
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />

        <Tooltip content='Find location' style='light' animation='duration-500'>
          <UilSearch
            size={40}
            className='cursor-pointer text-white transition ease-out hover:scale-125'
            onClick={handleSearchClick}
          />
        </Tooltip>

        <Tooltip
          content='Find current location'
          style='light'
          animation='duration-500'
        >
          <UilMapMarker
            size={40}
            className='cursor-pointer text-white transition ease-out hover:scale-125'
            onClick={handleLocationSearch}
          />
        </Tooltip>
{/* 
        <Tooltip
          content='Add to favorites'
          style='light'
          animation='duration-500'
        >
          <UilFavorite
            size={40}
            className='cursor-pointer text-white transition ease-out hover:scale-125'
            // onClick={handleLocationSearch}
          />
        </Tooltip> */}
      </div>
      <div className='flex w-1/5 flex-row items-center justify-end'>
        <button
          name='metric'
          className='text-3xl text-white transition ease-out hover:scale-125'
          onClick={handleUnitsClick}
        >
          °C
        </button>
        <p className='mx-2 text-3xl text-white'>/</p>
        <button
          name='imperial'
          className='text-3xl text-white transition ease-out hover:scale-125'
          onClick={handleUnitsClick}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default InputBar;
