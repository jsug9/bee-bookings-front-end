import React from 'react';
import PropTypes from 'prop-types';
import BeeItem from './BeeItem';

const BeesList = (props) => {
  const { bees, width } = props;

  const itemsShown = 3;
  const cardWidth = width / itemsShown;
  const sliderWidth = bees.length * cardWidth;

  const style = {
    width: `${sliderWidth}px`,
  };

  return (
    <ul
      className="flex w-full transition-margin"
      id="slider"
      style={style}
    >
      {bees.map((bee) => (
        <BeeItem key={bee.id} bee={bee} width={cardWidth} />
      ))}
    </ul>
  );
};

BeesList.propTypes = {
  bees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  width: PropTypes.number.isRequired,
};

export default BeesList;
