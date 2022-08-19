import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import renderWithProviders, { screen } from './test-utils';
import userReducer, { logOutUser, signIn } from '../Redux/user/UserReducer';
import BeesReducer, { deleteBee } from '../Redux/bees/BeesReducer';
import { setupStore } from '../Redux/testStore';


// src/setupTests.js
import server from '../mswMocks/server';
import { act } from 'react-dom/test-utils';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('deletes an item with axios', async () => {
  const { data } = await axios.delete(
    'https://bee-store.herokuapp.com/api/v1/items/6'
  );
  expect(data.message).toBe('Item deleted successfully');
});

it('Navbar renders to the page', () => {
  const tree = renderWithProviders(
    <Router>
      <Navbar />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the navbar renders its appropriate default links', () => {
  renderWithProviders(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText(/Home/)).toBeInTheDocument();
});

it('Tests the sign in functionality of the redux store', async () => {
  const store = setupStore();
  await store.dispatch(signIn('AaronIsCool'));

  renderWithProviders(
    <Router>
      <Navbar />
    </Router>, { store }
  );


  expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
});

it('Tests the sign out functionality of the redux store triggered by the navbar', async () => {
  const store = setupStore();
  await store.dispatch(signIn('AaronIsCool'));

  act(() => {
    renderWithProviders(
      <Router>
        <Navbar />
      </Router>, { store }
    );
  })

  

  expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
  
  await act( async () => {
   store.dispatch(logOutUser());
  })

  expect(screen.getByText(/Log in/)).toBeInTheDocument();
});