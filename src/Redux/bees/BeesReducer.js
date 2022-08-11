const GET_BEES = 'Bees/GET_BEES';

const initialState = [
  {
    id: 1,
    name: 'bee1',
    image: 'https://placekitten.com/200/300',
    description: 'Awesome bee',
  },
  {
    id: 2,
    name: 'bee2',
    image: 'https://placekitten.com/200/300',
    description: 'Awesome bee',
  },
  {
    id: 3,
    name: 'bee3',
    image: 'https://placekitten.com/200/300',
    description: 'Awesome bee',
  },
];

const getBees = async (dispatch) => {
  const payload = ['bee1', 'bee2', 'bee3'];
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
export { getBees };
