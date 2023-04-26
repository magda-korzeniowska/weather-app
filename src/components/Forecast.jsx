import React from 'react';
import { UilClouds } from '@iconscout/react-unicons';

const Forecast = () => {
  return (
    <div className='mt-6 flex flex-col items-start justify-center'>
      <p className='font-medium uppercase text-white'>Forecast</p>
      <hr className='my-2 w-full' />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col items-center text-white'>
          <p className='text-sm font-light'>04:30 PM</p>
          <UilClouds size={30} className='my-1 w-12' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center text-white'>
          <p className='text-sm font-light'>04:30 PM</p>
          <UilClouds size={30} className='my-1 w-12' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center text-white'>
          <p className='text-sm font-light'>04:30 PM</p>
          <UilClouds size={30} className='my-1 w-12' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center text-white'>
          <p className='text-sm font-light'>04:30 PM</p>
          <UilClouds size={30} className='my-1 w-12' />
          <p className='font-medium'>22°</p>
        </div>
        <div className='flex flex-col items-center text-white'>
          <p className='text-sm font-light'>04:30 PM</p>
          <UilClouds size={30} className='my-1 w-12' />
          <p className='font-medium'>22°</p>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
