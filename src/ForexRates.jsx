import React, { useState, useEffect } from 'react';
import ForexRateList from './ForexRateList';

const ForexRates = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.forexrateapi.com/v1/latest?api_key=8377b3e36a4129aa9bca7d7488fa79be&base=USD&currencies=EUR,INR,JPY'
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Forex Rates</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {rates && <ForexRateList rates={rates} />}
    </div>
  );
};

export default ForexRates;
