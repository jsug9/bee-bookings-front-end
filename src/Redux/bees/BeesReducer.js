const GET_BEES = 'Bees/GET_BEES';

const initialState = [];

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
