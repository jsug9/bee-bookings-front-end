const GET_USER = 'User/GET_USER';

const initialState = [];

const getuser = async (dispatch) => {
  const payload = ['bee1', 'bee2', 'bee3'];
  dispatch({
    type: GET_USER,
    payload,
  });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    default:
      return state;
  }
};

export default userReducer;
export {
  getuser,
};
// Remove these guys later
