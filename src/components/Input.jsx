import React from 'react';
import { UilMapMarker, UilSearch } from '@iconscout/react-unicons';

const InputBar = () => {
  return (
    <div className='my-6 flex flex-row justify-center'>
      <div className='flex w-3/4 flex-row items-center justify-center space-x-3'>
        <input
          type='text'
          className='w-full p-2 text-xl font-light capitalize shadow-xl placeholder:lowercase focus:outline-transparent'
          placeholder='Find location...'
        />
        <UilSearch
          size={40}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
        />
        <UilMapMarker
          size={40}
          className='cursor-pointer text-white transition ease-out hover:scale-125'
        />
      </div>
      <div className='flex w-1/4 flex-row items-center justify-center'>
        <button name='metric' className='text-3xl font-light text-white'>
          °C
        </button>
        <p className='mx-2 text-3xl text-white'>|</p>
        <button name='imperial' className='text-3xl font-light text-white'>
          °F
        </button>
      </div>
    </div>
  );
};

export default InputBar;
