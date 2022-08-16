import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/DetailsPage.scss';
import { Button, Fab } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';

const BeeDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { bee } = location.state;

  const disabled = () => bee.id === 2;

  const redirect = () => {
    navigate('/');
  };

  const backStyle = {
    position: 'fixed',
    bottom: 30,
    left: 25,
  };

  return (
    <div className="bee-details">
      <img src={bee.image} alt={bee.name} className="bee-image" />
      <div className="bee-information">
        <h1>{bee.name}</h1>
        <p>{bee.description}</p>
        <Button
          variant="contained"
          color="success"
          startIcon={<LibraryAddIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Book bee
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ fontWeight: 'bold' }}
          disabled={disabled()}
        >
          Delete Bee
        </Button>
      </div>
      <Fab
        color="inherit"
        size="large"
        style={backStyle}
        onClick={redirect}
      >
        <ArrowBackIosNewIcon />
      </Fab>
    </div>
  );
};

export default BeeDetailsPage;
