import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import render, { screen } from './test-utils';
import userReducer, { logOutUser } from '../Redux/user/UserReducer';
import user from './__mocks__/userMock';

it('Navbar renders to the page', () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});

it('Checks that the navbar renders its appropriate links', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
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
    </Router>,
  );

  const finalState = await userReducer(state, logOutUser());

  expect(finalState).toStrictEqual(user);
});
