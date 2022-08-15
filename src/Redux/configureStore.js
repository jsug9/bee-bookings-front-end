import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import beesReducer from './bees/BeesReducer';
import reservationsReducer from './reservations/ReservationsReducer';
import userReducer from './user/UserReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    bees: beesReducer,
    reservations: reservationsReducer,
  },
});
