import React from 'react';
import { formatToLocalTime } from '../utils/weatherService';

const TimeAndLocation = ({ weatherData: { dt, timezone, name, country } }) => {
  return (
    <div className='my-6 flex flex-col items-center justify-center'>
      <p className='text-xl font-extralight text-white'>
        {formatToLocalTime(dt, timezone)}
      </p>
      <p className='my-3 text-4xl font-medium text-white'>
        {name}, {country}
      </p>
    </div>
  );
};

export default TimeAndLocation;
