import React from 'react';
import {
  UilArrowDown,
  UilArrowUp,
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from '@iconscout/react-unicons';
import {formatToLocalTime, getWeatherIcon} from '../utils/weatherService';

const Weather = ({ weatherData }) => {

  const {
    details,
    icon,
    temp,
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    timezone
  } = weatherData;

  return (
    <div>
      <p className='py-6 text-center text-xl font-medium text-cyan-300'>
        {details}
      </p>
      <div className='flex items-center justify-between py-3 text-white'>
        <img src={getWeatherIcon(icon)} alt='' className='w-20' />
        <p className='text-5xl font-medium'>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-2 text-sm font-light'>
          <div className='flex flex-row'>
            <UilTemperature size={18} className='mr-1' />
            <p>
              Real feel: <span className='font-medium'>{`${feels_like.toFixed()}°`}</span>
            </p>
          </div>
          <div className='flex flex-row'>
            <UilTear size={18} className='mr-1' />
            <p>
              Humidity: <span className='font-medium'>{`${humidity}%`}</span>
            </p>
          </div>
          <div className='flex flex-row'>
            <UilWind size={18} className='mr-1' />
            <p>
              Wind: <span className='font-medium'>{`${speed.toFixed()} km/h`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between py-3 text-sm font-light text-white'>
        <div className='flex flex-row'>
          <UilSun size={18} className='mr-1' />
          <p>
            Sunrise: <span className='font-medium'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilSunset size={18} className='mr-1' />
          <p>
            Sunset: <span className='font-medium'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilArrowUp size={18} className='mr-1' />
          <p>
            High: <span className='font-medium'>{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className='flex flex-row'>
          <UilArrowDown size={18} className='mr-1' />
          <p>
            Low: <span className='font-medium'>{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
