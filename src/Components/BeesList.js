import PropTypes from 'prop-types';
import BeeItem from './BeeItem';

const BeesList = (props) => {
  const { bees } = props;

  return (
    <ul className="bees_ul">
      {bees.map((bee) => (
        <BeeItem key={bee.id} bee={bee} />
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
};

export default BeesList;
