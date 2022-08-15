import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BeeItemSocial from './BeeItemSocial';

const BeeItem = (props) => {
  const { bee } = props;
  const navigate = useNavigate();

  const redirect = () => {
    navigate(
      `/${bee.id}`,
      { state: { bee } },
    );
  };

  return (
    <div className="p-5 h-full">
      <button
        type="button"
        onClick={redirect}
        className="rounded-lg h-full shadow-lg flex flex-col"
      >
        <div className="flex-col">
          <img src={bee.image} alt="Tour" className="h-50 w-full object-cover rounded-md" />
          <h2 className="mt-2 text-2xl font-bold text-gray-700 pt-3 pb-3 pl-3 pr-3">
            {bee.name}
          </h2>
          <hr className="w-1/2 mx-auto pb-3" />
          <p className="mt-2 text-gray-500 pl-4 pr-4">{bee.description}</p>
        </div>
        <BeeItemSocial />
      </button>
    </div>
  );
};

BeeItem.propTypes = {
  bee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeeItem;
