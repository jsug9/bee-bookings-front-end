import { act } from 'react-dom/test-utils';
import ReservationsPage from '../Pages/ReservationsPage';
import AddReservationPage from '../Pages/AddReservationPage';
import { signIn } from '../Redux/user/UserReducer';
import renderWithProviders, { screen } from './test-utils';
import setupStore from '../Redux/testStore';
import server from '../mswMocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('renders reservations to the page', () => {
  const tree = renderWithProviders(
    <ReservationsPage />,
  );
  expect(tree).toMatchSnapshot();
});

it('renders add reservations form to the page', () => {
  const tree = renderWithProviders(
    <AddReservationPage />,
  );
  expect(tree).toMatchSnapshot();
});

it('doesn\'t show the add reservations form if the user is not logged in', async () => {
  const store = setupStore();
  //   await store.dispatch(signIn('AaronIsCool'));

  act(() => {
    renderWithProviders(
      <AddReservationPage />, { store },
    );
  }).then(() => {
    expect(screen.queryByText(/Add Reservation Page/)).not.toBeInTheDocument();
  });
});

it('doesn\'t show the reservations page if the user is not logged in', async () => {
  const store = setupStore();

  act(() => {
    renderWithProviders(
      <ReservationsPage />, { store },
    );
  }).then(() => {
    expect(screen.queryByText(/Bees booked/)).not.toBeInTheDocument();
  });
});

it('shows the add reservations form if the user is logged in', async () => {
  const store = setupStore();
  await store.dispatch(signIn('AaronIsCool'));

  act(() => {
    renderWithProviders(
      <AddReservationPage />, { store },
    );
  })

  expect(screen.getByText('Add Reservation Page')).toBeInTheDocument();
});

it('shows the add reservations form if the user is logged in', async () => {
  const store = setupStore();
  await store.dispatch(signIn('AaronIsCool'));

  act(() => {
    renderWithProviders(
      <ReservationsPage />, { store },
    );
  })

  expect(screen.getByText('No Bees Booked 🐝')).toBeInTheDocument();
});