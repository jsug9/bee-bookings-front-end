import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputLabel, FormControl, Select, MenuItem,
} from '@mui/material';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { addReservation } from '../Redux/reservations/ReservationsReducer';
// import { useLocation } from 'react-router-dom';

const AddReservationPage = () => {
  // const location = useLocation();
  const [date, setDate] = useState('');
  const [beeId, setBeeId] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const bees = useSelector((state) => state.bees.allBees);
  // if (location.state) {
  //   const { selectedBee } = location.state;
  //   setBeeId(selectedBee.id);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      date: date.toString(),
      user_id: userId,
      item_id: beeId,
      city,
    };
    dispatch(addReservation(object));
  };

  return (
    <div>
      <h1>Add Reservation Page</h1>
      <FormControl fullWidth onSubmit={handleSubmit}>
        <InputLabel id="bee-select-label">Bee</InputLabel>
        <Select
          labelId="bee-select-label"
          id="bee-select"
          value={beeId}
          label="Bee"
          onChange={(e) => { setBeeId(e.target.value); }}
          style={{ width: '200px' }}
        >
          {bees.map((bee) => (
            <MenuItem value={bee.id} key={bee.id}>
              {bee.name}
            </MenuItem>
          ))}
        </Select>
        <input type="date" name="date" id="date" placeholder="Enter date" required value={date} onChange={(e) => setDate(e.target.value)} />
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          // renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider> */}
        <input type="text" name="city" id="city" placeholder="Enter city" required value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Add Reservation</button>
      </FormControl>
    </div>
  );
};

export default AddReservationPage;
