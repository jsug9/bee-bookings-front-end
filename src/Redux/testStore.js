import { combineReducers, configureStore } from '@reduxjs/toolkit'
import beesReducer from './bees/BeesReducer';
import reservationsReducer from './reservations/ReservationsReducer';
import userReducer from './user/UserReducer';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: userReducer,
  bees: beesReducer,
  reservations: reservationsReducer,
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}