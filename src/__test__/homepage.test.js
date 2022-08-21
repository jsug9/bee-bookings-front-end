// import axios from 'axios';
import { act } from 'react-dom/test-utils';
import HomePage from '../Pages/HomePagess';
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

it('Homepage renders to the page', () => {
  const tree = renderWithProviders(
    <HomePage />,
  );
  expect(tree).toMatchSnapshot();
});

it('HomePage text is shown in the page', async () => {
  renderWithProviders(
    <HomePage />,
  );

  expect(screen.getByText('Our Collection of Bees')).toBeInTheDocument();
});

it('Bee cards render in the page', async () => {
  const store = realStore;
  await act(async () => {
    renderWithProviders(
      <HomePage />, { store },
    );
    await store.dispatch(getAllBees());
  });

  expect(store.getState().bees.allBees.length).toBe(10);
});
