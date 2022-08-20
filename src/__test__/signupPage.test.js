import { act } from 'react-dom/test-utils';
import SignupPage from '../Pages/SignupPage';
import renderWithProviders, { screen } from './test-utils';
import { signUp } from '../Redux/user/UserReducer';
import server from '../mswMocks/server';
import realStore from '../Redux/configureStore';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('login page renders to the page', () => {
  const tree = renderWithProviders(
    <SignupPage />,
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the signup page displays to the screen', () => {
  renderWithProviders(
    <SignupPage />,
  );
  expect(screen.getByText(/Sign Up/)).toBeInTheDocument();
});

it('Tests the sign up functionality of the redux store', async () => {
  const store = realStore;

  await act(async () => {
    renderWithProviders(
      <SignupPage />, { store },
    );
    await store.dispatch(signUp('AaronIsCool'));
  });

  // On successful login the user is welcomed by a "Welcome!" message
  expect(screen.getByText(/Welcome!/)).toBeInTheDocument();
});
