import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../Redux/reservations/ReservationsReducer';

const AddReservationPage = () => {
  const [date, setDate] = useState('');
  const [beeId, setBeeId] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  const bees = useSelector((state) => state.bees.allBees);

  const handleSubmit = (e) => {
    e.preventDefault();
    const object = {
      date: date.toString(),
      user_id: userId,
      item_id: beeId,
      city,
    };
    dispatch(addReservation(object));
    console.log(object);
  };

  return (
    <div>
      <h1>Add Reservation Page</h1>
      <form method="post" onSubmit={handleSubmit}>
        <select onChange={(value) => { setBeeId(value); }}>
          {bees.map((bee) => (<option value={bee.id} key={bee.id.toString()}>{bee.name}</option>))}
        </select>
        <input type="date" name="date" id="date" placeholder="Enter date" required value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" name="city" id="city" placeholder="Enter city" required value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Add Reservation</button>
      </form>
    </div>
  );
};

export default AddReservationPage;
