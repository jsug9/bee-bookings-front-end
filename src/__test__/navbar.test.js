import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import render, { screen } from './test-utils';
import userReducer, { logOutUser } from '../Redux/user/UserReducer';
import user from './__mocks__/userMock';

// src/setupTests.js
import server from '../mswMocks/server';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

it('Log in a user with axios', async () => {
  const data = await axios.post(
    'https://bee-store.herokuapp.com/api/v1/signin',
    {
      username: 'AaronIsCool',
    }
  );
  console.log(data);
  expect(data.data.user_id).toBe(4);
});

it('deletes an item with axios', async () => {
  const { data } = await axios.delete(
    'https://bee-store.herokuapp.com/api/v1/items/6'
  );
  expect(data.message).toBe('Item deleted successfully');
});

it('Navbar renders to the page', () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the navbar renders its appropriate links', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText(/Home/)).toBeInTheDocument();
});

it('updates the mocked rocket reserved status from false to true', async () => {
  const state = {
    username: 'emyrue',
    userId: 5,
    isLoading: false,
    createdUser: true,
  };

  render(
    <Router>
      <Navbar />
    </Router>
  );

  const finalState = await userReducer(state, logOutUser());

  expect(finalState).toStrictEqual(user);
});
