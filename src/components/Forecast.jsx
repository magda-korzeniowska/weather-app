import React from 'react';
import { getWeatherIcon } from '../utils/weatherService';

const Forecast = ({ title, weatherData }) => {
  return (
    <div className='mt-6 flex flex-col items-start justify-center'>
      <p className='font-medium uppercase text-white'>{title}</p>
      <hr className='my-2 w-full' />
      <div className='flex w-full justify-between'>
        {weatherData.map((elem, index) => (
          <div
            className='flex flex-col items-center text-white'
            key={`hour-${index}`}
          >
            <p className='text-sm font-light'>{elem.title}</p>
            <img src={getWeatherIcon(elem.icon)} alt='' className='my-1 w-12' />
            <p className='font-medium'>{`${elem.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
