import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

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
    <li className="bee_li">
      <button
        type="button"
        onClick={redirect}
        className="bee_item_button"
      >
        <div className="bee_image_container">
          <img src={bee.image} alt={bee.name} className="bee_item_image" />
          <div className="bee_image_background" />
        </div>
        <h3>{bee.name}</h3>
        <p>{bee.description}</p>
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
