import React from 'react';

const PlanetsCard = ({ planet }) => {
  return (
    <div className="planet-card">
      {/* Display planet image */}
      <img src={planet.url} alt={planet.title} />
      {/* Display planet title */}
      <h3>{planet.title}</h3>
      {/* Display date taken */}
      <p>Date Taken: {planet.date}</p>
      {/* Display planet description */}
      <p>{planet.explanation}</p>
    </div>
  );
};

export default PlanetsCard;