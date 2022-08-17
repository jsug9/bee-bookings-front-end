import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select, MenuItem, InputLabel, FormControl,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { addReservation } from '../Redux/reservations/ReservationsReducer';

const AddReservationPage = () => {
  const location = useLocation();
  const [date, setDate] = useState('');
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
  };

  return (
    <div>
      <h1>Add Reservation Page</h1>
      <form method="post" onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel id="bee-label">Bee</InputLabel>
          <Select labelId="bee-label" label="Bee" style={{ width: '300px' }} value={beeId} onChange={(e) => { setBeeId(e.target.value); }}>
            { location.state
          && (
          <MenuItem value={location.state.bee.id}>
            {location.state.bee.name}
          </MenuItem>
          ) }
            { !location.state
          && <MenuItem value="">Select a Bee</MenuItem>}
            {bees.map((bee) => (
              <MenuItem value={bee.id} key={bee.id}>
                {bee.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <input type="date" name="date" id="date" placeholder="Enter date" required value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" name="city" id="city" placeholder="Enter city" required value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservationPage;
