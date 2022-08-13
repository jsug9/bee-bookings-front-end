import PropTypes from 'prop-types';
import BeeItem from './BeeItem';

const BeesList = (props) => {
  const { bees } = props;

  return (
    <ul className="mx-auto w-full flex flex-col gap-24 md:flex-row  md:justify-center md:items-center md:min-h-[70vh] md:gap-0">
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
