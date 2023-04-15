import React from 'react'

const locations = [
  {
    id: 1,
    name: "Bydgoszcz, PL",
  },
  {
    id: 2,
    name: "Warsaw, PL",
  },
  {
    id: 3,
    name: "Barcelona, ES",
  },
  {
    id: 4,
    name: "Lisbon, PT",
  },
  {
    id: 5,
    name: "Funchal, PT",
  },
];

const MainLocations = () => {
  return (
    <div className='flex items-center my-6 justify-around'>
      {locations.map(location => (
        <button key={location.id} className='text-white text-lg font-medium'>{location.name}</button>
      ))}
    </div>
  )
}

export default MainLocations;