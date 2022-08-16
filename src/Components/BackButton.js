import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = () => {
  const navigate = useNavigate();
  const redirect = () => navigate('/');

  const backStyle = {
    position: 'fixed',
    bottom: 30,
    left: 25,
  };

  return (
    <Fab
      color="inherit"
      size="large"
      style={backStyle}
      onClick={redirect}
    >
      <ArrowBackIosNewIcon />
    </Fab>
  );
};

export default BackButton;
