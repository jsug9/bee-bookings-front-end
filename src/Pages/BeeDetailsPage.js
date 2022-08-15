import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/Homepage.scss';

const BeeDetailsPage = () => {
  const location = useLocation();

  const { bee } = location.state;

  return (
    <div className="bee-details">
      <img src={bee.image} alt={bee.name} className="bee-image" />
      <div className="bee-information">
        <h1>{bee.name}</h1>
        <p>{bee.description}</p>
      </div>
    </div>
  );
};

export default BeeDetailsPage;
