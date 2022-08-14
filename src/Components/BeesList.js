import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import BeeItem from './BeeItem';

const useResize = (myRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    setWidth(myRef.current.offsetWidth);
    setHeight(myRef.current.offsetHeight);
  }, [myRef]);

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef, handleResize]);

  return { width, height };
};

const BeesList = (props) => {
  const { bees } = props;

  const ref = useRef();
  const { width } = useResize(ref);

  console.log(width);

  return (
    <div className="w-10/12 overflow-hidden" id="slider-container" ref={ref}>
      <ul className="flex w-full">
        {bees.map((bee) => (
          <BeeItem key={bee.id} bee={bee} />
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
