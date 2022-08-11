import PropTypes from 'prop-types';

const BeeItem = (props) => {
  const { bee } = props;
  return (
    <li>
      <div className="bee_image_container">
        <img src={bee.image} alt={bee.name} className="bee_item_image" />
        <div className="bee_image_background" />
      </div>
      <h3>{bee.name}</h3>
      <p>{bee.description}</p>
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
