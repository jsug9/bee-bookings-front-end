const GET_BEES = 'Bees/GET_BEES';
const ADD_BEE = 'Bees/ADD_BEE';
const DELETE_BEE = 'Bees/DELETE_BEE';

const initialState = [];

const getBees = () => async (dispatch) => {
  const payload = [
    {
      id: '1',
      name: 'bee1',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'This is an awesome bee',
    },
    {
      id: '2',
      name: 'bee2',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'This is a very awesome bee',
    },
    {
      id: '3',
      name: 'bee3',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'This is a huge bee that is also awesome, but not as much as the first one',
    },
    {
      id: '4',
      name: 'bee4',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'This is a huge bee that is also awesome, but not as much as the first one and the second one',
    },
    {
      id: '5',
      name: 'bee5',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'Awesome bee',
    },
    {
      id: '6',
      name: 'bee6',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'Awesome bee',
    },
    {
      id: '7',
      name: 'bee7',
      image: 'https://i.pinimg.com/originals/ae/7f/0a/ae7f0aa6330f9db3896a4c9190281006.png',
      description: 'Awesome bee',
    },
  ];

  dispatch({
    type: GET_BEES,
    payload,
  });
};

const beesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEES:
      return action.payload;

    default:
      return state;
  }
};

export default beesReducer;
export {
  getBees,
  ADD_BEE,
  DELETE_BEE,
};
// Remove these guys later
