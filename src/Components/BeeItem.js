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
    <li className="md:h-[420px] flex-1">
      <button
        type="button"
        onClick={redirect}
        className="md:max-w-xs rounded overflow-hidden mx-2 shadow-lg shadow-gray-dark md:pb-3  md:h-full"
      >
        <img src={bee.image} alt="Tour" className="w-100 pb-5 mx-auto" />
        <h2 className="text-center pb-5 text-black font-l font-bold">
          {bee.name}
        </h2>
        <hr className="w-1/4 mx-auto" />
        <div className="flex flex-col flex-wrap text-center gap-3 pt-5">
          <p className="font-medium text-black">{bee.description}</p>
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
};

export default BeeItem;
