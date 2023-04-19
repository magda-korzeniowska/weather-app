import React from 'react';
import {
  UilArrowDown,
  UilArrowUp,
  UilClouds,
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from '@iconscout/react-unicons';

const Weather = () => {
  return (
    <div>
      <p className='py-6 text-center text-xl font-medium text-cyan-300'>
        Cloudy
      </p>
      <div className='flex items-center justify-between py-3 text-white'>
        <UilClouds size={70} className='w-20' />
        <p className='text-5xl font-medium'>8°C</p>
        <div className='flex flex-col space-y-2 text-sm font-light'>
          <div className='flex flex-row'>
            <UilTemperature size={18} className='mr-1' />
            <p>
              Real feel: <span className='font-medium'>4°C</span>
            </p>
          </div>
          <div className='flex flex-row'>
            <UilTear size={18} className='mr-1' />
            <p>
              Humidity: <span className='font-medium'>45%</span>
            </p>
          </div>
          <div className='flex flex-row'>
            <UilWind size={18} className='mr-1' />
            <p>
              Wind: <span className='font-medium'>15 km/h</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row text-white text-sm font-light justify-between py-3'>
        <div className='flex flex-row'>
          <UilSun size={18} className='mr-1' />
          <p>
            Sunrise: <span className='font-medium'>04:50 AM</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilSunset size={18} className='mr-1' />
          <p>
            Sunset: <span className='font-medium'>07:15 PM</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilArrowUp size={18} className='mr-1' />
          <p>
            High: <span className='font-medium'>13°C</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilArrowDown size={18} className='mr-1' />
          <p>
            Low: <span className='font-medium'>3°C</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
