import React from 'react';
import { UilFavorite } from '@iconscout/react-unicons';
import { Tooltip } from 'flowbite-react';

import { formatToLocalTime } from '../utils/weatherService';

const TimeAndLocation = ({ weatherData, handleClick }) => {
  const { dt, timezone, name, country } = weatherData;
  return (
    <div className='my-6 flex flex-col items-center justify-center'>
      <p className='text-xl font-extralight text-white'>
        {formatToLocalTime(dt, timezone)}
      </p>
      <div className='flex items-center justify-center'>
        <p className='my-3 mr-8 text-4xl font-medium text-white'>
          {name}, {country}
        </p>
        <div>
          <Tooltip
            content='Add to favorites'
            style='light'
            animation='duration-500'
          >
            <UilFavorite
              size={40}
              className='cursor-pointer text-white transition ease-out hover:scale-125'
              onClick={handleClick}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TimeAndLocation;
