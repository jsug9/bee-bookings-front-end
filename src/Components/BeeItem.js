import PropTypes from 'prop-types';

const BeeItem = (props) => {
  const { bee } = props;
  return (
    <li>
      <h3>{bee.name}</h3>
      <p>{bee.description}</p>
      <img src={bee.image} alt={bee.name} />
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
