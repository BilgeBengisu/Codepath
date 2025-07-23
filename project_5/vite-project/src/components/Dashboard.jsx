import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Dashboard = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,cca3'
        );
        const data = await res.json();
        setAllCountries(data);
        setFilteredCountries(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleRegionFilter = (region) => {
    console.log('Button clicked:', region);
    setSelectedRegion(region);

    if (region === 'All') {
      setFilteredCountries(allCountries);
    } else {
      const filtered = allCountries.filter((country) => {
        const countryRegion = (country.region || '').trim().toLowerCase();
        return countryRegion === region.trim().toLowerCase();
      });
      setFilteredCountries(filtered);
    }
  };

  return (
    <div className="dashboard">
      <h2>Country Dashboard</h2>

      {/* Filter Buttons */}
      <div className="filters">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => handleRegionFilter(region)}
            className={`filter-button ${
              selectedRegion === region ? 'active' : ''
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Loading Message */}
      {loading && <p>Loading countries...</p>}

      {/* Country Grid */}
      <div className="dashboard-grid">
        {Array.isArray(filteredCountries) &&
          filteredCountries.map((country) => (
            <div className="card" key={country.cca3}>
              <img src={country.flags.png} alt={country.name.common} />
              <h3>{country.name.common}</h3>
              <p>
                <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
              </p>
              <p>
                <strong>Population:</strong>{' '}
                {country.population.toLocaleString()}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
