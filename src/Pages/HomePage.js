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
      <div className="mx-auto w-full flex flex-col p-10 mt-10 md:mt-0 text-center gap-4">
        <h1 className="mx-auto font-bold text-5xl text-black md:mt-[20px]">Our Collection of Bees</h1>
        <p className="mx-auto text-2xl text-text-gray">Please select a Bee</p>
      </div>
      <BeesList bees={bees} />
    </section>
  );
};

export default HomePage;
