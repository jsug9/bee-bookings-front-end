import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { getBees } from '../Redux/bees/BeesReducer';
import BeesList from '../Components/BeesList';
import '../Styles/HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const bees = useSelector((state) => state.bees);
  useEffect(() => {
    dispatch(getBees());
  }, []);

  const prev = () => {
    console.log('prev');
  };

  const next = () => {
    console.log('next');
  };

  return (
    <section>
      <h1>Our Collection of Bees</h1>
      <p>Please select a Bee</p>
      <div className="flex">
        <div className="w-2/12 flex items-center">
          <div className="w-full text-right">
            <button
              type="button"
              className="p-3 rounded-full bg-white border-gray-700 shadow-lg mr-5"
              onClick={prev}
            >
              <Icon icon="ooui:previous-ltr" />
            </button>
          </div>
        </div>
        <BeesList bees={bees} />
        <div className="w-2/12 flex items-center">
          <div className="w-full text-left">
            <button
              type="button"
              className="p-3 rounded-full bg-white border-gray-700 shadow-lg ml-5"
              onClick={next}
            >
              <Icon icon="ooui:previous-rtl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
