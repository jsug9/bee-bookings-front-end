import { act } from 'react-dom/test-utils';
import Navbar from '../Components/Navbar';
import renderWithProviders, { screen } from './test-utils';
import { signIn } from '../Redux/user/UserReducer';
import setupStore from '../Redux/testStore';
import server from '../mswMocks/server';
import realStore from '../Redux/configureStore';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('Navbar renders to the page', () => {
  const tree = renderWithProviders(
    <Navbar />,
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the navbar renders its appropriate default links', () => {
  renderWithProviders(
    <Navbar />,
  );
  expect(screen.getByText(/Home/)).toBeInTheDocument();
});

it('Tests the sign in functionality of the redux store', async () => {
  const store = realStore;
  await store.dispatch(signIn('AaronIsCool'));

  renderWithProviders(
    <Navbar />, { store },
  );

  expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
});

it('Tests the sign out functionality of the login method triggered by the navbar', async () => {
  const store = setupStore();
  await store.dispatch(signIn('AaronIsCool'));

  act(() => {
    renderWithProviders(
      <Navbar />, { store },
    );
  });

  expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
  const button = screen.getByText('Sign Out');

  act(() => {
    button.click();
  });

  expect(screen.getByText(/Log in/)).toBeInTheDocument();
});
