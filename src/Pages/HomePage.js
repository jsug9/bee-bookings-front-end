import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { getBees } from '../Redux/bees/BeesReducer';
import BeesList from '../Components/BeesList';
import useResize from '../Utilities/UseResize';
import '../Styles/HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const bees = useSelector((state) => state.bees);
  const ref = useRef();

  const { width, marginLeft } = useResize(ref);

  const itemsShown = 3;
  const cardWidth = width / itemsShown;

  useEffect(() => {
    dispatch(getBees());
  }, []);

  console.log(`width: ${width}`);

  const prev = () => {
    const slicedMargin = +marginLeft.slice(0, -2);
    if (slicedMargin !== -cardWidth * (bees.length - itemsShown)) {
      ref.current.style.marginLeft = `${slicedMargin - cardWidth}px`;
    }
  };

  const next = () => {
    const slicedMargin = +marginLeft.slice(0, -2);
    if (slicedMargin !== 0) {
      ref.current.style.marginLeft = `${slicedMargin + cardWidth}px`;
    }
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
        <div
          className="w-10/12 overflow-hidden"
          id="slider-container"
          ref={ref}
        >
          <BeesList bees={bees} width={width} />
        </div>
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
