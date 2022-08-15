import {
  useState,
  useCallback,
  useEffect,
} from 'react';

const useResize = (myRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);

  const handleResize = useCallback(() => {
    const nodeStyle = window.getComputedStyle(myRef.current);
    setWidth(myRef.current.offsetWidth);
    setHeight(myRef.current.offsetHeight);
    setMarginLeft(nodeStyle.getPropertyValue('margin-left'));
  }, [myRef]);

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef, handleResize]);

  return { width, height, marginLeft };
};

export default useResize;
