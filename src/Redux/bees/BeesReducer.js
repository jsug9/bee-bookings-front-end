const GET_BEES = 'Bees/GET_BEES';
const ADD_BEE = 'Bees/ADD_BEE';
const DELETE_BEE = 'Bees/DELETE_BEE';

const initialState = [];

const getBees = () => async (dispatch) => {
  const payload = [
    {
      id: '1',
      name: 'bee1',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Drinking_Bee.jpg/1200px-Drinking_Bee.jpg',
      description: 'This is an awesome bee',
    },
    {
      id: '2',
      name: 'bee2',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Bee-apis.jpg',
      description: 'This is a very awesome bee',
    },
    {
      id: '3',
      name: 'bee3',
      image: 'https://www.efsa.europa.eu/sites/default/files/styles/share_opengraph/public/2021-07/Bee-4.jpeg?h=199d8c1f&itok=O4pVoW8_',
      description: 'This is a huge bee that is also awesome, but not as much as the first one',
    },
    {
      id: '4',
      name: 'bee4',
      image: 'https://static.scientificamerican.com/sciam/cache/file/AC4DB995-FA5D-48DB-8DD545A9C3D9C99E.jpg',
      description: 'This is a huge bee that is also awesome, but not as much as the first one and the second one',
    },
    {
      id: '5',
      name: 'bee5',
      image: 'https://cdn.vox-cdn.com/thumbor/rGldYo-RM65yQSyLEEHpmZZBm6M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16288122/24338137314_5a3c670cba_k.jpg',
      description: 'Awesome bee',
    },
    {
      id: '6',
      name: 'bee6',
      image: 'https://www.bee-careful.com/site_media/uploads/bee-515023_1920_JzsNgip.jpg',
      description: 'Awesome bee',
    },
    {
      id: '7',
      name: 'bee7',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/TsfUirxCXIrkTpPTu34gaxiw.jpg',
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
