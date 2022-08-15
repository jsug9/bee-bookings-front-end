const ADD_RESERVATION = 'Reservations/ADD_RESERVATION';
const DELETE_RESERVATION = 'Reservations/DELETE_RESERVATION';
const GET_RESERVATIONS = 'Reservations/GET_RESERVATIONS';

const initialState = [];

const getReservations = async (dispatch) => {
  const payload = ['bee1', 'bee2', 'bee3'];
  dispatch({
    type: GET_RESERVATIONS,
    payload,
  });
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVATIONS:
      return action.payload;

    default:
      return state;
  }
};

export default reservationsReducer;
export {
  getReservations,
  GET_RESERVATIONS,
  DELETE_RESERVATION,
  ADD_RESERVATION,
};
// Remove these guys later
