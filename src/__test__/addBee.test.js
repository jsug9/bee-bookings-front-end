import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import LoginPage from '../Pages/LoginPage';
import AddBeePage from '../Pages/AddBeePage';
import renderWithProviders, { screen } from './test-utils';
import { signIn } from '../Redux/user/UserReducer';
import { getAllBees, addBee } from '../Redux/bees/BeesReducer';
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

it('Creates a bee when the user submits the form', async () => {
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
  const form = document.querySelector('form');
  expect(form).toBeInTheDocument();
  document.querySelector('#name-form').value = 'Wonderful Bee';
  const description = document.querySelector('#description-form');
  description.value = 'This is a wonderful bee';
  expect(description.value).toBe('This is a wonderful bee');
  const fileinput = document.querySelector(
    '.MuiInputBase-input.MuiOutlinedInput-input.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input',
  );
  fileinput.value = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';
  await store.dispatch(getAllBees());
  expect(store.getState().bees.allBees.length).toBe(10);
  await store.dispatch(
    addBee({
      name: 'Wonderful Bee',
      description: 'This is a wonderful bee',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    }),
  );
  expect(store.getState().bees.allBees.length).toBe(10);
});
