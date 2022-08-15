import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const GET_BEES = 'Bees/GET_BEES';
const ADD_BEE = 'Bees/ADD_BEE';
const DELETE_BEE = 'Bees/DELETE_BEE';

const getBeesEndpoint = 'https://bee-store.herokuapp.com/api/v1/items';

const initialState = {
  allBees: [],
  isLoading: false,
};

export const getAllBees = createAsyncThunk(GET_BEES, async() => {
  const { data } = await axios.get(getBeesEndpoint);
  return data;
});

export const addBee = createAsyncThunk(ADD_BEE, async(bee) => {
  axios.post(getBeesEndpoint, bee);
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
  },
});

export default beesSlice.reducer;
