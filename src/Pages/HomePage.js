import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getBees } from '../Redux/bees/BeesReducer';
import BeesList from '../Components/BeesList';
import '../Styles/HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const bees = useSelector((state) => state.bees);
  useEffect(() => {
    dispatch(getBees());
  }, []);

  return (
    <div>
      <h1>Our Collection of Bees</h1>
      <p>Please select a Bee</p>
      <BeesList bees={bees} />
    </div>
  );
};

export default HomePage;
