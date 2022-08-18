import Navbar from "../Components/Navbar";
import render, { screen } from './test-utils';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// import { logOutUser } from '../Redux/user/UserReducer'
// import user from '../__test__/__mocks__/userMock';
// import { useDispatch } from 'react-redux';

it("Navbar renders to the page", () => {
  const tree = render(
    <Router>
      <Navbar />
    </Router>
);
  expect(tree).toMatchSnapshot();
});


it("Checks that the navbar renders its appropriate links", () => {
  render(
    <Router>
      <Navbar />
    </Router>
);
  expect(screen.getByText(/Home/)).toBeInTheDocument();
});

// it('updates the mocked rocket reserved status from false to true', async () => {
//   const state = {
//     username: 'emyrue',
//     userId: 5,
//     isLoading: false
//   }; 

//   const dispatch = jest.fn()
//   const thunk = logOutUser;
//   await thunk(dispatch, () => state, undefined);
//   console.log(dispatch.mock.calls)

//   expect(logOutUser()).toStrictEqual(user);
// });
