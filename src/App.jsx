import React, { useState, useEffect } from 'react';
import PlanetsGallery from './components/PlanetsGallery';
import PlanetsFilter from './components/PlanetsFilter';

const App = () => {
  // State to store all planets data
  const [planets, setPlanets] = useState([]);
  // State to store filtered planets data
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to store error messages
  const [error, setError] = useState(null);

  // Fetch planets data from NASA API on component mount
  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10');
        if (!response.ok) {
          throw new Error('Failed to fetch planet data');
        }
        const data = await response.json();
        setPlanets(data); // Store fetched data
        setFilteredPlanets(data); // Initialize filtered data
        setLoading(false); // Set loading to false
      } catch (err) {
        setError(err.message); // Store error message
        setLoading(false); // Set loading to false
      }
    };

    fetchPlanets();
  }, []);

  // Handle filtering of planets
  const handleFilter = (filteredData) => {
    setFilteredPlanets(filteredData);
  };

  // Show loading or error messages if applicable
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Planets Gallery</h1>
      {/* Filter component to filter planets */}
      <PlanetsFilter planets={planets} onFilter={handleFilter} />
      {/* Gallery component to display planets */}
      <PlanetsGallery planets={filteredPlanets} />
    </div>
  );
};

export default App;