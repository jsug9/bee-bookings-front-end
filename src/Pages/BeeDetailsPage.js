import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/DetailsPage.scss';
import { Button } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import BackButton from '../Components/BackButton';
import CardActionsContainer from '../Components/CardActions';

const BeeDetailsPage = () => {
  const location = useLocation();

  const { bee } = location.state;

  const disabled = () => bee.id === 2;

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
        <CardActionsContainer />
      </div>
      <BackButton />
    </div>
  );
};

export default BeeDetailsPage;
