/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select, MenuItem, InputLabel, FormControl, TextField, Button,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useLocation } from 'react-router-dom';
import { addReservation } from '../Redux/reservations/ReservationsReducer';
import { getAllBees } from '../Redux/bees/BeesReducer';
import PleaseLogin from '../Components/PleaseLogin';
import '../Styles/BeeForm.scss';
import '../Styles/ReservationForm.scss';

const AddReservationPage = () => {
  const location = useLocation();
  const [date, setDate] = useState(new Date());
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
    if (city.trim()) {
      const object = {
        date: date.toString(),
        user_id: userId,
        item_id: beeId,
        city: city.trim(),
      };
      dispatch(addReservation(object));
      setDate(new Date());
      setBeeId('');
      setCity('');
    }
  };

  return (
    <div className="reservation-form-container">
      { userId
      && (
      <form className="bee-form reservation-form" method="post" onSubmit={handleSubmit}>
        <h1 style={{ marginBottom: '30px' }}>Add Reservation Page</h1>
        <FormControl>
          <InputLabel id="bee-label">Bee</InputLabel>
          <Select required labelId="bee-label" label="Bee" style={{ backgroundColor: 'white', marginBottom: '20px', borderRadius: '4px' }} value={beeId} onChange={(e) => { setBeeId(e.target.value); }}>
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
            renderInput={(params) => <TextField sx={{ backgroundColor: 'white', borderRadius: '4px' }} {...params} />}
          />
        </LocalizationProvider>
        <TextField id="city" label="City" variant="outlined" style={{ borderRadius: '4px', backgroundColor: 'white', marginTop: '20px' }} required value={city} onChange={(e) => setCity(e.target.value)} />
        <Button
          type="submit"
          variant="contained"
          color="success"
          startIcon={<LibraryAddIcon />}
          sx={{
            fontWeight: 'bold', marginTop: '20px', width: '300px', alignSelf: 'center',
          }}
        >
          Book bee
        </Button>
      </form>
      )}
      {!userId
      && (
        <PleaseLogin message="Add a Reservation" />
      )}
    </div>
  );
};

export default AddReservationPage;
