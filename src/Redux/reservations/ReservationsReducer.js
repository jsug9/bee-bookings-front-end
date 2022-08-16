/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getReservationsUrl = 'https://bee-store.herokuapp.com/api/v1/bookings/user';
const addReservationUrl = 'https://bee-store.herokuapp.com/api/v1/bookings';

const ADD_RESERVATION = 'Reservations/ADD_RESERVATION';
const DELETE_RESERVATION = 'Reservations/DELETE_RESERVATION';
const GET_RESERVATIONS = 'Reservations/GET_RESERVATIONS';

export const getReservations = createAsyncThunk(GET_RESERVATIONS, async (userId) => {
  const { data } = await axios.post(getReservationsUrl, { user_id: userId });
  return data;
});

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (reservation) => {
  axios.post(addReservationUrl, reservation);
  const { data } = await axios.post(getReservationsUrl, { user_id: reservation.user_id });
  return data;
});

export const deleteReservation = createAsyncThunk(DELETE_RESERVATION,
  async (reservationId, userId) => {
    axios.delete(`${addReservationUrl}/${reservationId}`);
    const { data } = await axios.post(getReservationsUrl, { user_id: userId });
    return data;
  });

const initialState = {
  allReservations: [],
  isLoading: false,
};

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    logOut: (state) => {
      state.allReservations = [];
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getReservations.fulfilled]: (state, action) => {
      state.allReservations = action.payload;
      state.isLoading = false;
    },
    [getReservations.rejected]: (state) => {
      state.allReservations = [];
      state.isLoading = false;
    },
    [getReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [addReservation.fulfilled]: (state, action) => {
      state.allReservations = action.payload;
      state.isLoading = false;
    },
    [addReservation.rejected]: (state) => {
      state.allReservations = [];
      state.isLoading = false;
    },
    [addReservation.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteReservation.fulfilled]: (state, action) => {
      state.allReservations = action.payload;
      state.isLoading = false;
    },
    [deleteReservation.rejected]: (state) => {
      state.allReservations = [];
      state.isLoading = false;
    },
    [deleteReservation.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { logOut } = reservationsSlice.actions;
export default reservationsSlice.reducer;
