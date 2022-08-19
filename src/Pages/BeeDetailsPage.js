import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/DetailsPage.scss';
import { Button } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import BackButton from '../Components/BackButton';
import CardActionsContainer from '../Components/CardActions';
import { deleteBee } from '../Redux/bees/BeesReducer';

const BeeDetailsPage = () => {
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { bee } = location.state;

  useEffect(() => {
    if (bee.id > 19) {
      setDisabled(false);
    }
  }, [bee]);

  const redirect = () => {
    navigate(
      '/add_reservation',
      { state: { bee } },
    );
  };

  const handleDelete = () => {
    if (bee.id > 19) {
      return;
    }
    dispatch(deleteBee(bee.id));
    navigate('/');
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
          onClick={redirect}
        >
          Book bee
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          sx={{ fontWeight: 'bold' }}
          disabled={disabled}
          onClick={handleDelete}
        >
          Delete Bee
        </Button>
        <CardActionsContainer bee={bee} />
      </div>
      <BackButton />
    </div>
  );
};

export default BeeDetailsPage;
