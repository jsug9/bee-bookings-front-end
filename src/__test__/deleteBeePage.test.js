import axios from 'axios';
import { act } from 'react-dom/test-utils';
import DeleteBeePage from '../Pages/DeleteBeePage';
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

it('delete bee page renders to the page', () => {
  const tree = renderWithProviders(
    <DeleteBeePage />,
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the page displays to the screen', () => {
  renderWithProviders(
    <DeleteBeePage />,
  );
  expect(screen.getByText(/Delete a Bee/)).toBeInTheDocument();
});

it('Tests the sign up functionality of the redux store', async () => {
  const store = realStore;
  const getBeesEndpoint = 'https://bee-store.herokuapp.com/api/v1/items';

  await act(async () => {
    renderWithProviders(
      <DeleteBeePage />, { store },
    );
    await store.dispatch(getAllBees());

    const deleteBee = (beeId) => {
      const data = axios.delete(`${getBeesEndpoint}/${beeId}`);
      return data;
    };

    const result = await deleteBee(1);

    expect(result.status).toEqual(200);
  });
});
