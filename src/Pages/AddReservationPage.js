/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select, MenuItem, InputLabel, FormControl, TextField, Button,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useLocation, useNavigate } from 'react-router-dom';
import { addReservation } from '../Redux/reservations/ReservationsReducer';
import { getAllBees } from '../Redux/bees/BeesReducer';
import '../Styles/BeeForm.scss';

const AddReservationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [date, setDate] = useState(Date.now());
  const [beeId, setBeeId] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const bees = useSelector((state) => state.bees.allBees);

  useEffect(() => {
    if (location.state) {
      const { bee } = location.state;
      setBeeId(bee.id);
    }
    dispatch(getAllBees());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      date: date.toString(),
      user_id: userId,
      item_id: beeId,
      city,
    };
    dispatch(addReservation(object));
    navigate('/reservations');
  };

  return (
    <div>
      { userId
      && (
      <form className="bee-form reservation-form" method="post" onSubmit={handleSubmit}>
        <h1>Add Reservation Page</h1>
        <FormControl>
          <InputLabel id="bee-label">Bee</InputLabel>
          <Select required labelId="bee-label" label="Bee" style={{"margin-bottom": "10px"}} value={beeId} onChange={(e) => { setBeeId(e.target.value); }}>
            {bees.map((bee) => (
              <MenuItem value={bee.id} key={bee.id}>
                {bee.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileDatePicker
            label="Date"
            inputFormat="MM/dd/yyyy"
            value={date}
            required
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField id="city" label="City" variant="outlined" style={{"margin-top": "10px"}} required value={city} onChange={(e) => setCity(e.target.value)} />
        <Button
        type="submit"
        variant="contained"
        color="success"
        startIcon={<LibraryAddIcon />}
        sx={{ fontWeight: 'bold', marginTop: '10px', width: '300px', alignSelf: 'center' }}
      >
        Book bee
      </Button>
      </form>
      )}
      {!userId && <h1>Please log in to add a reservation</h1>}
    </div>
  );
};

export default AddReservationPage;
