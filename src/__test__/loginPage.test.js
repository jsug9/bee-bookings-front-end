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

it('login page renders to the page', () => {
  const tree = renderWithProviders(
    <LoginPage />,
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the login Page displays to the screen', () => {
  renderWithProviders(
    <LoginPage />,
  );
  expect(screen.getByText(/Buzz In/)).toBeInTheDocument();
});

it('Tests the sign in functionality of the redux store', async () => {
  const store = realStore;
  await store.dispatch(signIn('AaronIsCool'));

  renderWithProviders(
    <LoginPage />, { store },
  );

  expect(store.getState().user.username).toStrictEqual('AaronIsCool');
});
