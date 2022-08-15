import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { getBees } from '../Redux/bees/BeesReducer';
import BeesList from '../Components/BeesList';
import '../Styles/Homepage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const bees = useSelector((state) => state.bees);

  useEffect(() => {
    dispatch(getBees());
  }, []);

  return (
    <section>
      <div className="homepage-title">
        <h1 className="title">Our Collection of Bees</h1>
        <p className="description">Please select a Bee</p>
      </div>
      <BeesList bees={bees} />
    </section>
  );
};

export default HomePage;
