import React from 'react';

const PlanetsCard = ({ planet }) => {
  return (
    <div className="planet-card">
      <img src={planet.url} alt={planet.title} />
      <h3>{planet.title}</h3>
      <p>Date Taken: {planet.date}</p>
      <p>{planet.explanation}</p>
    </div>
  );
};

export default PlanetsCard;