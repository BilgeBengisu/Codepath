import React, { useEffect, useState } from 'react';
import './Dashboard.css';

export const Dashboard = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return(
        <div className="dashboard">
            <h2>Country Dashboard</h2>
            <div className="dashboard-grid">
                {countries.map((country, index) => (
                <div className="card" key={index}>
                    <img src={country.flags.png} alt={country.name.common} />
                    <h3>{country.name.common}</h3>
                    <p>Capital: {country.capital?.[0] || 'N/A'}</p>
                    <p>Population: {country.population.toLocaleString()}</p>
                    <p>Region: {country.region}</p>
                </div>
                ))}
            </div>
        </div>
  );
};