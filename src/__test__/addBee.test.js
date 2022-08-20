import { fireEvent, userEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import LoginPage from '../Pages/LoginPage';
import AddBeePage from '../Pages/AddBeePage';
import renderWithProviders, { screen } from './test-utils';
import { signIn } from '../Redux/user/UserReducer';
import server from '../mswMocks/server';
import realStore from '../Redux/configureStore';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('Doesnt render the add bee page if the user is not logged in', async () => {
  const store = realStore;
  await store.dispatch(signIn('AaronIsCool'));
  renderWithProviders(<AddBeePage />, { store });
  expect(screen.queryByText(/Add Bee/)).not.toBeInTheDocument();
});

it('It renders the Add Bee Component if User is Signed In', async () => {
  const store = realStore;
  renderWithProviders(<LoginPage />, { store });

  expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  const input = document.querySelector('#username');
  const submitButton = screen.getByText(/Let's Go!/);
  expect(input).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  await act(async () => {
    input.value = 'AaronIsCool';
    fireEvent.submit(submitButton);
  });
  renderWithProviders(<AddBeePage />, { store });
  expect(screen.getByText(/Add Your own Bee/)).toBeInTheDocument();
});
