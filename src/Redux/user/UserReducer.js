/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const signInEndpoint = 'https://bee-store.herokuapp.com/' + 'api/v1/signin';
const signUpEndpoint = 'https://bee-store.herokuapp.com/' + 'api/v1/signup';

export const signIn = createAsyncThunk('user/signIn', async (username) => {
  const userParams = { user: { username } };
  const { data } = await axios.post(signInEndpoint, userParams);
  return data;
});

export const signUp = createAsyncThunk('user/signUp', async (username) => {
  const userParams = { user: { username } };
  const { data } = await axios.post(signUpEndpoint, userParams);
  return data;
});

const initialState = {
  username: null,
  userId: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.username = null;
      state.userId = null;
    },
  },
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.username = action.payload.username;
      state.userId = action.payload.user_id;
      state.isLoading = false;
    },
    [signIn.rejected]: (state) => {
      state.isLoading = false;
    },
    [signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.username = action.payload.username;
      state.userId = action.payload.user_id;
      state.isLoading = false;
    },
    [signUp.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { logOutUser } = userSlice.actions;
export default userSlice.reducer;
