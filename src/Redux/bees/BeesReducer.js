/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_BEES = 'Bees/GET_BEES';
const GET_BEE_DETAILS = 'Bees/GET_BEE_DETAILS';
const ADD_BEE = 'Bees/ADD_BEE';
const DELETE_BEE = 'Bees/DELETE_BEE';

const getBeesEndpoint = 'https://bee-store.herokuapp.com/api/v1/items';

const initialState = {
  allBees: [],
  beeDetails: {},
  isLoading: false,
};

export const getAllBees = createAsyncThunk(GET_BEES, async () => {
  const { data } = await axios.get(getBeesEndpoint);
  return data;
});

export const getBeeDetails = createAsyncThunk(GET_BEE_DETAILS, async (id) => {
  const { data } = await axios.get(`${getBeesEndpoint}/${id}`);
  return data;
});

export const addBee = createAsyncThunk(ADD_BEE, async (bee) => {
  axios.post(getBeesEndpoint, bee);
  const { data } = await axios.get(getBeesEndpoint);
  return data;
});

export const deleteBee = createAsyncThunk(DELETE_BEE, async (beeId) => {
  axios.delete(`${getBeesEndpoint}/${beeId}`);
  const { data } = await axios.get(getBeesEndpoint);
  return data;
});

const beesSlice = createSlice({
  name: 'Bees',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBees.fulfilled]: (state, action) => {
      state.allBees = action.payload;
      state.isLoading = false;
    },
    [getAllBees.rejected]: (state) => {
      state.allBees = [];
      state.isLoading = false;
    },
    [getAllBees.pending]: (state) => {
      state.allBees = [];
      state.isLoading = true;
    },
    [getBeeDetails.fulfilled]: (state, action) => {
      state.beeDetails = action.payload;
      state.isLoading = false;
    },
    [getBeeDetails.rejected]: (state) => {
      state.beeDetails = {};
      state.isLoading = false;
    },
    [getBeeDetails.pending]: (state) => {
      state.beeDetails = {};
      state.isLoading = true;
    },
    [addBee.fulfilled]: (state, action) => {
      state.allBees = action.payload;
      state.isLoading = false;
    },
    [addBee.rejected]: (state) => {
      state.allBees = [];
      state.isLoading = false;
    },
    [addBee.pending]: (state) => {
      state.allBees = [];
      state.isLoading = true;
    },
    [deleteBee.fulfilled]: (state, action) => {
      state.allBees = action.payload;
      state.isLoading = false;
    },
    [deleteBee.rejected]: (state) => {
      state.allBees = [];
      state.isLoading = false;
    },
    [deleteBee.pending]: (state) => {
      state.allBees = [];
      state.isLoading = true;
    },
  },
});

export default beesSlice.reducer;
