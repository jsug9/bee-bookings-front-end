const GET_BEES = 'Bees/GET_BEES';
const ADD_BEE = 'Bees/ADD_BEE';
const DELETE_BEE = 'Bees/DELETE_BEE';

const initialState = [];

const getBees = () => async (dispatch) => {
  const payload = [
    {
      id: '1',
      name: 'Beegusto',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Drinking_Bee.jpg/1200px-Drinking_Bee.jpg',
      description: 'Beegusto is a great bee to drink with!',
    },
    {
      id: '2',
      name: 'Aaron Beegan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Bee-apis.jpg',
      description: 'Beegan is an awesome bee! It is the favorite of countless people.',
    },
    {
      id: '3',
      name: 'Beemily',
      image: 'https://www.efsa.europa.eu/sites/default/files/styles/share_opengraph/public/2021-07/Bee-4.jpeg?h=199d8c1f&itok=O4pVoW8_',
      description: 'Beemily is a great bee to have around! You will love her!',
    },
    {
      id: '4',
      name: 'Henbee',
      image: 'https://dam.tuenlinea.com/wp-content/uploads/2018/10/que-pasa-si-desaparecen-las-abejas.jpg',
      description: 'Henbee is an interesting bee! It is a good one to have around.',
    },
    {
      id: '5',
      name: 'Jorgebee',
      image: 'https://cdn.vox-cdn.com/thumbor/rGldYo-RM65yQSyLEEHpmZZBm6M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16288122/24338137314_5a3c670cba_k.jpg',
      description: 'Jorgebee is one of the strongest bees in the world!',
    },
    {
      id: '6',
      name: 'Juanbee',
      image: 'https://www.bee-careful.com/site_media/uploads/bee-515023_1920_JzsNgip.jpg',
      description: 'Juanbee is very funny, you will love him',
    },
    {
      id: '7',
      name: 'Beefara',
      image: 'https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/TsfUirxCXIrkTpPTu34gaxiw.jpg',
      description: 'Beefara is a kind bee, he is very helpful',
    },
    {
      id: '8',
      name: 'Beeshome',
      image: 'https://static.scientificamerican.com/sciam/cache/file/AC4DB995-FA5D-48DB-8DD545A9C3D9C99E.jpg',
      description: 'Beeshome is a lovely bee, he is very nice',
    },
    {
      id: '9',
      name: 'Danbeelo',
      image: 'https://dam.ngenespanol.com/wp-content/uploads/2021/05/GettyImages-974011558.jpg',
      description: 'Danbeelo is the nicest bee, he is awesome',
    },
    {
      id: '10',
      name: 'Beernando',
      image: 'https://laverdadnoticias.com/__export/1594572714636/sites/laverdad/img/2020/07/12/significado_abejas_insectos_animales.jpg_2065693559.jpg',
      description: 'Beernando is a unique bee, he is very unique',
    },
    {
      id: '11',
      name: 'Beerdavs',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb25NjWEKUDmdjSpkcVQcGI9DwyTCwmYWCR4D1fIhitsnmEb2kZrIIAqWUOW_k4sm-hc&usqp=CAU',
      description: 'Beerdavs is a fantastic bee, he is very fantastic',
    },
    {
      id: '12',
      name: 'Beetky',
      image: 'https://www.lavanguardia.com/files/image_449_220/uploads/2018/11/29/5fa4453654587.jpeg',
      description: 'Beetky is a great bee, he is very great',
    },
    {
      id: '13',
      name: 'Tabeesse',
      image: 'https://quo.eldiario.es/wp-content/uploads/2019/10/gettyimages-909949688-2-1543408952.jpg',
      description: 'Tabeesse is a hilarious bee, he is very hilarious',
    },
    {
      id: '14',
      name: 'Beekif',
      image: 'https://www.elindependiente.com/wp-content/uploads/2017/10/abeja.jpg',
      description: 'Beekif is a funny bee, he is very funny',
    },
    {
      id: '15',
      name: 'Beediq',
      image: 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/11/29/5fa4453654587.jpeg',
      description: 'Beediq is a mysterious bee, he is very mysterious',
    },
    {
      id: '16',
      name: 'Beejudá',
      image: 'https://www.bee-careful.com/site_media/uploads/bee-85576_1280_aJbdjL8.jpg',
      description: 'Beejudá can play the guitar, he is very talented',
    },
    {
      id: '17',
      name: 'Beemuel',
      image: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/11/29/5fa4453654587.jpeg',
      description: 'Beemuel can sing, he is very talented',
    },
    {
      id: '18',
      name: 'Beelase',
      image: 'https://www.agriculturayganaderia.com/website/wp-content/uploads/2017/08/wsi-imageoptim-Abejas-abejas-abejas-2-640x451.jpg',
      description: 'Beelase can solve math problems, he is very talented',
    },
    {
      id: '19',
      name: 'Beerthur',
      image: 'https://static.nationalgeographicla.com/files/styles/image_3200/public/01honeybeegallery.jpg?w=1190&h=794',
      description: 'Beerthur is a wise bee, he is very wise',
    },
    {
      id: '20',
      name: 'Tolubee',
      image: 'https://i.ytimg.com/vi/rWP0fnKana0/maxresdefault.jpg',
      description: 'Tolubee can help you, he is very helpful',
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
