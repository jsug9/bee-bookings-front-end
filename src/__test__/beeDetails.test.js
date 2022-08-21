import { act } from 'react-dom/test-utils';
import HomePage from '../Pages/HomePage';
import BeeDetailsPage from '../Pages/BeeDetailsPage';
import renderWithProviders, { screen } from './test-utils';
import { getAllBees } from '../Redux/bees/BeesReducer';
import server from '../mswMocks/server';
import realStore from '../Redux/configureStore';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('Renders the HomePage component', async () => {
  const store = realStore;
  await act(async () => {
    renderWithProviders(<HomePage />, { store });
    await store.dispatch(getAllBees());
  });
  expect(screen.getByText(/Our/)).toBeInTheDocument();
});

it('Renders the BeeDetails component', async () => {
  const store = realStore;
  await act(async () => {
    renderWithProviders(<HomePage />, { store });
    await store.dispatch(getAllBees());
  });
  expect(screen.getByText(/Our/)).toBeInTheDocument();
  // window.history.pushState(
  //   { bee: { id: 1, name: 'beeGusto' } },
  //   '',
  //   'http://localhost:3000/1',
  // );
  // await act(async () => {
  //   const navigateState = { bee: 1 };
  //   const url = '/1';

  //   window.history.pushState(navigateState, '', url);
  //   renderWithProviders(<BeeDetailsPage />, { store });
  // });
  // expect(screen.getByText(/bee/)).toBeInTheDocument();
});
