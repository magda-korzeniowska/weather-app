import React from 'react';

const locations = [
  {
    id: 1,
    name: 'Bydgoszcz',
    country: 'PL',
  },
  {
    id: 2,
    name: 'Warsaw',
    country: 'PL',
  },
  {
    id: 3,
    name: 'Barcelona',
    country: 'ES',
  },
  {
    id: 4,
    name: 'Lisbon',
    country: 'PT',
  },
  {
    id: 5,
    name: 'Funchal',
    country: 'PT',
  },
];

const MainLocations = ({ handleLocationChange }) => {
  return (
    <div className='my-6 flex items-center justify-around'>
      {locations.map((location) => (
        <button
          onClick={() => handleLocationChange(location.name)}
          key={location.id}
          className='text-lg font-medium text-white'
        >
          {location.name}, {location.country}
        </button>
      ))}
    </div>
  );
};

export default MainLocations;
