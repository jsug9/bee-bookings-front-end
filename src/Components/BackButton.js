import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

const BackButton = () => {
  const navigate = useNavigate();
  const redirect = () => navigate('/');

  return (
    <button
      type="button"
      className="backButton"
      onClick={redirect}
    >
      <ChevronLeftOutlinedIcon
        fontSize="large"
      />
    </button>
  );
};

export default BackButton;
