import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BeeItemSocial from './BeeItemSocial';

const BeeItem = (props) => {
  const { bee, width } = props;
  const navigate = useNavigate();

  const redirect = () => {
    navigate(
      `/${bee.id}`,
      { state: { bee } },
    );
  };

  console.log(width);

  return (
    <li className="p-5" id="card" style={{ width: `${width}px` }}>
      <button
        type="button"
        onClick={redirect}
        className="rounded-lg p-5 h-full shadow-lg flex flex-col"
      >
        <div className="flex-col">
          <img src={bee.image} alt="Tour" className="h-50 w-full object-cover rounded-md" />
          <h2 className="mt-2 text-2xl font-bold text-gray-700">
            {bee.name}
          </h2>
          <hr className="w-1/2 mx-auto" />
          <p className="mt-2 text-gray-500">{bee.description}</p>
        </div>
        <BeeItemSocial />
      </button>
    </li>
  );
};

BeeItem.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.number.isRequired,
};

export default BeeItem;
