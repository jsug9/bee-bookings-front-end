/* eslint-disable react/prop-types */
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import beesReducer from '../Redux/bees/BeesReducer';
import reservationsReducer from '../Redux/reservations/ReservationsReducer';
import userReducer from '../Redux/user/UserReducer';
import user from './__mocks__/userMock';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        user: userReducer,
        bees: beesReducer,
        reservations: reservationsReducer,
      },
    }),
    ...renderOptions
  } = { user },
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export default render;
