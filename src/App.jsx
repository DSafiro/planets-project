import React, { useState, useEffect } from 'react';
import PlanetsGallery from './components/PlanetsGallery';
import PlanetsFilter from './components/PlanetsFilter';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10');
        if (!response.ok) {
          throw new Error('Failed to fetch planet data');
        }
        const data = await response.json();
        setPlanets(data);
        setFilteredPlanets(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  const handleFilter = (filteredData) => {
    setFilteredPlanets(filteredData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Planets Gallery</h1>
      <PlanetsFilter planets={planets} onFilter={handleFilter} />
      <PlanetsGallery planets={filteredPlanets} />
    </div>
  );
};

export default App;