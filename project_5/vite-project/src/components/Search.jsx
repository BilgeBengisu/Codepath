import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState(null);
    const[error, setError] = useState('');

    const handleSearch = () => {
        if (!query.trim()) return;
        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then(res=> {
                if (!res.ok) {
                    throw new Error('Country not found');
                }
                return res.json();
            })
            .then(data => {
                setCountry(data[0]);
                setError('');
            })
            .catch(err => {
                setCountry(null);
                setError('Country not found');
            });
    };
    
    return(
        <div style={{ padding: '2rem'}}>
            <h2>Search for a Country</h2>
            <div style={{ marginBottom:'1rem'}}>
                <input 
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    type="text" 
                    placeholder="Enter country name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ padding: '0.5rem', width: '250px' }}
                />
                <button onClick={handleSearch} style={{ padding: 'o.5rem 1rem', marginLeft: '0.5rem', zIndex:2}}>
                    Search
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {country && (
                <div style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                maxWidth: '400px'
                }}>
                <img src={country.flags.png} alt={country.name.common} style={{ width: '100px' }} />
                <h3>{country.name.common}</h3>
                <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                </div>
            )}
        </div>
    );
};

