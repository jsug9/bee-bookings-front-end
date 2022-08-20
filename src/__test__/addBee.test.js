import { fireEvent, userEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { context } from 'msw';
import LoginPage from '../Pages/LoginPage';
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

it("It doesn't let you add a bee if user is not signed in", async () => {
  const store = realStore;
  renderWithProviders(<LoginPage />, { store });

  expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
  const input = document.querySelector('#username');
  const submitButton = screen.getByText(/Let's Go!/);
  expect(input).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  act(async () => {
    input.value = 'AaronIsCool';
    fireEvent.submit(submitButton);
  });
});
