import React from 'react';

const ForexRateList = ({ rates }) => {
  return (
    <ul>
      <li>EUR: {rates.EUR}</li>
      <li>INR: {rates.INR}</li>
      <li>JPY: {rates.JPY}</li>
    </ul>
  );
};

export default ForexRateList;
