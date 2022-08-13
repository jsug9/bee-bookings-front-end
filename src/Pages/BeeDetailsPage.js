import React from 'react';
import { useLocation } from 'react-router-dom';

const BeeDetailsPage = () => {
  const location = useLocation();

  const { bee } = location.state;

  console.log(bee);

  return (
    <div>
      <h2>{bee.name}</h2>
      <p>{bee.description}</p>
      <img src={bee.image} alt={bee.name} />
    </div>
  );
};

export default BeeDetailsPage;
