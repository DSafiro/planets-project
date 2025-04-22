import React from 'react';
import PlanetsCard from './PlanetsCard';

const PlanetsGallery = ({ planets }) => {
  return (
    <div className="planets-gallery">
      {/* Map over planets and render a card for each */}
      {planets.map((planet, index) => (
        <PlanetsCard key={index} planet={planet} />
      ))}
    </div>
  );
};

export default PlanetsGallery;