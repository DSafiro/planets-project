import React, { useState, useEffect } from 'react';

const PlanetsFilter = ({ planets, onFilter }) => {
  const [year, setYear] = useState('');
  const [availableYears, setAvailableYears] = useState([]);

  useEffect(() => {
    // Extract unique years from planet data
    const years = new Set();

    planets.forEach((planet) => {
      const date = new Date(planet.date);
      const year = date.getFullYear();
      if (year > 0) { // Ensure no negative years
        years.add(year);
      }
    });

    // Convert the set to an array and sort it
    setAvailableYears([...years].sort((a, b) => a - b));
  }, [planets]);

  const handleFilter = () => {
    const filtered = planets.filter((planet) => {
      const date = new Date(planet.date);
      return !year || date.getFullYear() === parseInt(year);
    });
    onFilter(filtered);
  };

  return (
    <div className="planets-filter">
      <label>
        Year:
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">All</option>
          {availableYears.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default PlanetsFilter;