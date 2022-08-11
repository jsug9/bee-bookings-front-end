import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import beesReducer from './bees/BeesReducer';
import reservationsReducer from './reservations/ReservationsReducer';
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
  user: userReducer,
  bees: beesReducer,
  reservations: reservationsReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;
