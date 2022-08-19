/* eslint-disable react/prop-types */
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupStore from '../Redux/testStore';

function renderWithProviders(
  ui,
  {
    preloadedState,
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Router><Provider store={store}>{children}</Provider></Router>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from '@testing-library/react';

export default renderWithProviders;
