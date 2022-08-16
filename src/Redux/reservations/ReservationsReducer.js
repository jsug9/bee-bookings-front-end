import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getReservationsUrl = 'https://bee-store.herokuapp.com/api/v1/bookings/user';
const addReservationUrl = 'https://bee-store.herokuapp.com/api/v1/bookings';

const ADD_RESERVATION = 'Reservations/ADD_RESERVATION';
const DELETE_RESERVATION = 'Reservations/DELETE_RESERVATION';
const GET_RESERVATIONS = 'Reservations/GET_RESERVATIONS';

export const getReservations = createAsyncThunk(GET_RESERVATIONS, async (user_id) => {
  const { data } = await axios.post(getReservationsUrl, { user_id });
  return data;
});

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (reservation) => {
  axios.post(addReservationUrl, reservation);
  const { data } = await axios.post(getReservationsUrl, { user_id: reservation.user_id });
  return data;
});

const initialState = [];

// const getReservations = async (dispatch) => {
//   const payload = ['bee1', 'bee2', 'bee3'];
//   dispatch({
//     type: GET_RESERVATIONS,
//     payload,
//   });
// };

// const reservationsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_RESERVATIONS:
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export default reservationsReducer;
// export {
//   getReservations,
//   GET_RESERVATIONS,
//   DELETE_RESERVATION,
//   ADD_RESERVATION,
// };
// Remove these guys later
