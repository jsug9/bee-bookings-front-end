import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import BeeItem from './BeeItem';
import useResize from '../Utilities/UseResize';

const BeesList = (props) => {
  const { bees } = props;

  const ref = useRef();
  const { width } = useResize(ref);

  const cardWidth = width / 3;
  const sliderWidth = bees.length * cardWidth;

  return (
    <div
      className="w-10/12 overflow-hidden"
      id="slider-container"
      ref={ref}
    >
      <ul className="flex w-full" id="slider" style={{ width: `${sliderWidth}px` }}>
        {bees.map((bee) => (
          <BeeItem key={bee.id} bee={bee} width={cardWidth} />
        ))}
      </ul>
    </div>
  );
};

BeesList.propTypes = {
  bees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default BeesList;
