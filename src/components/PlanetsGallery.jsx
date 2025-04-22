import React from 'react';
import PlanetsCard from './PlanetsCard';

const PlanetsGallery = ({ planets }) => {
  return (
    <div className="planets-gallery">
      {planets.map((planet, index) => (
        <PlanetsCard key={index} planet={planet} />
      ))}
    </div>
  );
};

export default PlanetsGallery;