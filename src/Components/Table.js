import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../Redux/reservations/ReservationsReducer';

// const bees = [
//   {
//     'id': 1,
//     'name': 'Beegusto',
//     'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Drinking_Bee.jpg/1200px-Drinking_Bee.jpg',
//     'description': 'Beegusto is a great bee to drink with!',
//     'created_at': '2022-08-15T21:44:52.127Z',
//     'updated_at': '2022-08-15T21:44:52.127Z',
//   },
//   {
//     'id': 2,
//     'name': 'Aaron Beegan',
//     'image': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Bee-apis.jpg',
//     'description': 'Beegan is an awesome bee! It is the favorite of countless people.',
//     'created_at': '2022-08-15T21:44:52.133Z',
//     'updated_at': '2022-08-15T21:44:52.133Z',
//   },
//   {
//     'id': 3,
//     'name': 'Beemily',
//     'image': 'https://www.efsa.europa.eu/sites/default/files/styles/share_opengraph/public/2021-07/Bee-4.jpeg?h=199d8c1f&itok=O4pVoW8_',
//     'description': 'Beemily is a great bee to have around! You will love her!',
//     'created_at': '2022-08-15T21:44:52.136Z',
//     'updated_at': '2022-08-15T21:44:52.136Z',
//   },
//   {
//     'id': 4,
//     'name': 'Henbee',
//     'image': 'https://dam.tuenlinea.com/wp-content/uploads/2018/10/que-pasa-si-desaparecen-las-abejas.jpg',
//     'description': 'Henbee is an interesting bee! It is a good one to have around.',
//     'created_at': '2022-08-15T21:44:52.140Z',
//     'updated_at': '2022-08-15T21:44:52.140Z',
//   },
//   {
//     'id': 5,
//     'name': 'Jorgebee',
//     'image': 'https://cdn.vox-cdn.com/thumbor/rGldYo-RM65yQSyLEEHpmZZBm6M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16288122/24338137314_5a3c670cba_k.jpg',
//     'description': 'Jorgebee is one of the strongest bees in the world!',
//     'created_at': '2022-08-15T21:44:52.143Z',
//     'updated_at': '2022-08-15T21:44:52.143Z',
//   },
//   {
//     'id': 6,
//     'name': 'Juanbee',
//     'image': 'https://www.bee-careful.com/site_media/uploads/bee-515023_1920_JzsNgip.jpg',
//     'description': 'Juanbee is very funny, you will love him',
//     'created_at': '2022-08-15T21:44:52.147Z',
//     'updated_at': '2022-08-15T21:44:52.147Z',
//   },
//   {
//     'id': 7,
//     'name': 'Beefara',
//     'image': 'https://image.api.playstation.com/vulcan/ap/rnd/202009/1415/TsfUirxCXIrkTpPTu34gaxiw.jpg',
//     'description': 'Beefara is a kind bee, he is very helpful',
//     'created_at': '2022-08-15T21:44:52.150Z',
//     'updated_at': '2022-08-15T21:44:52.150Z',
//   },
//   {
//     'id': 8,
//     'name': 'Beeshome',
//     'image': 'https://static.scientificamerican.com/sciam/cache/file/AC4DB995-FA5D-48DB-8DD545A9C3D9C99E.jpg',
//     'description': 'Beeshome is a lovely bee, he is very nice',
//     'created_at': '2022-08-15T21:44:52.154Z',
//     'updated_at': '2022-08-15T21:44:52.154Z',
//   },
//   {
//     'id': 9,
//     'name': 'Danbeelo',
//     'image': 'https://dam.ngenespanol.com/wp-content/uploads/2021/05/GettyImages-974011558.jpg',
//     'description': 'Danbeelo is the nicest bee, he is awesome',
//     'created_at': '2022-08-15T21:44:52.158Z',
//     'updated_at': '2022-08-15T21:44:52.158Z',
//   },
//   {
//     'id': 10,
//     'name': 'Beernando',
//     'image': 'https://laverdadnoticias.com/__export/1594572714636/sites/laverdad/img/2020/07/12/significado_abejas_insectos_animales.jpg_2065693559.jpg',
//     'description': 'Beernando is a unique bee, he is very unique',
//     'created_at': '2022-08-15T21:44:52.161Z',
//     'updated_at': '2022-08-15T21:44:52.161Z',
//   },
//   {
//     'id': 11,
//     'name': 'Beerdavs',
//     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb25NjWEKUDmdjSpkcVQcGI9DwyTCwmYWCR4D1fIhitsnmEb2kZrIIAqWUOW_k4sm-hc&usqp=CAU',
//     'description': 'Beerdavs is a fantastic bee, he is very fantastic',
//     'created_at': '2022-08-15T21:44:52.166Z',
//     'updated_at': '2022-08-15T21:44:52.166Z',
//   },
//   {
//     'id': 12,
//     'name': 'Beetky',
//     'image': 'https://www.lavanguardia.com/files/image_449_220/uploads/2018/11/29/5fa4453654587.jpeg',
//     'description': 'Beetky is a great bee, he is very great',
//     'created_at': '2022-08-15T21:44:52.169Z',
//     'updated_at': '2022-08-15T21:44:52.169Z',
//   },
//   {
//     'id': 13,
//     'name': 'Tabeesse',
//     'image': 'https://quo.eldiario.es/wp-content/uploads/2019/10/gettyimages-909949688-2-1543408952.jpg',
//     'description': 'Tabeesse is a hilarious bee, he is very hilarious',
//     'created_at': '2022-08-15T21:44:52.173Z',
//     'updated_at': '2022-08-15T21:44:52.173Z',
//   },
//   {
//     'id': 14,
//     'name': 'Beekif',
//     'image': 'https://www.elindependiente.com/wp-content/uploads/2017/10/abeja.jpg',
//     'description': 'Beekif is a funny bee, he is very funny',
//     'created_at': '2022-08-15T21:44:52.178Z',
//     'updated_at': '2022-08-15T21:44:52.178Z',
//   },
//   {
//     'id': 15,
//     'name': 'Beediq',
//     'image': 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/11/29/5fa4453654587.jpeg',
//     'description': 'Beediq is a mysterious bee, he is very mysterious',
//     'created_at': '2022-08-15T21:44:52.183Z',
//     'updated_at': '2022-08-15T21:44:52.183Z',
//   },
//   {
//     'id': 16,
//     'name': 'Beejudá',
//     'image': 'https://www.bee-careful.com/site_media/uploads/bee-85576_1280_aJbdjL8.jpg',
//     'description': 'Beejudá can play the guitar, he is very talented',
//     'created_at': '2022-08-15T21:44:52.187Z',
//     'updated_at': '2022-08-15T21:44:52.187Z',
//   },
//   {
//     'id': 17,
//     'name': 'Beemuel',
//     'image': 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/11/29/5fa4453654587.jpeg',
//     'description': 'Beemuel can sing, he is very talented',
//     'created_at': '2022-08-15T21:44:52.192Z',
//     'updated_at': '2022-08-15T21:44:52.192Z',
//   },
//   {
//     'id': 18,
//     'name': 'Beerthur',
//     'image': 'https://static.nationalgeographicla.com/files/styles/image_3200/public/01honeybeegallery.jpg?w=1190&h=794',
//     'description': 'Beerthur is a wise bee, he is very wise',
//     'created_at': '2022-08-15T21:44:52.195Z',
//     'updated_at': '2022-08-15T21:44:52.195Z',
//   },
//   {
//     'id': 19,
//     'name': 'Beelase',
//     'image': 'https://www.agriculturayganaderia.com/website/wp-content/uploads/2017/08/wsi-imageoptim-Abejas-abejas-abejas-2-640x451.jpg',
//     'description': 'Beelase can solve math problems, he is very talented',
//     'created_at': '2022-08-15T21:44:52.199Z',
//     'updated_at': '2022-08-15T21:44:52.199Z',
//   },
// ];

// const reservations = [
//   {
//     'id': 6,
//     'date': '2022-08-16',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-16T17:07:41.559Z',
//     'updated_at': '2022-08-16T17:07:41.559Z',
//     'user_id': 5,
//     'item_id': 1,
//   },
//   {
//     'id': 7,
//     'date': '2022-08-17',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-16T17:30:32.259Z',
//     'updated_at': '2022-08-16T17:30:32.259Z',
//     'user_id': 5,
//     'item_id': 3,
//   },
//   {
//     'id': 8,
//     'date': '2022-08-17',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-16T17:31:26.353Z',
//     'updated_at': '2022-08-16T17:31:26.353Z',
//     'user_id': 5,
//     'item_id': 3,
//   },
//   {
//     'id': 9,
//     'date': '2022-08-24',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-16T17:34:39.136Z',
//     'updated_at': '2022-08-16T17:34:39.136Z',
//     'user_id': 5,
//     'item_id': 3,
//   },
//   {
//     'id': 10,
//     'date': '2022-08-18',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-16T19:59:29.744Z',
//     'updated_at': '2022-08-16T19:59:29.744Z',
//     'user_id': 5,
//     'item_id': 2,
//   },
//   {
//     'id': 11,
//     'date': '2022-08-18',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-17T17:41:37.917Z',
//     'updated_at': '2022-08-17T17:41:37.917Z',
//     'user_id': 5,
//     'item_id': 10,
//   },
//   {
//     'id': 12,
//     'date': '2022-08-18',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-17T17:42:11.418Z',
//     'updated_at': '2022-08-17T17:42:11.418Z',
//     'user_id': 5,
//     'item_id': 10,
//   },
//   {
//     'id': 13,
//     'date': '2022-08-25',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-17T17:44:24.562Z',
//     'updated_at': '2022-08-17T17:44:24.562Z',
//     'user_id': 5,
//     'item_id': 2,
//   },
//   {
//     'id': 14,
//     'date': '2022-08-18',
//     'city': 'Salt Lake City',
//     'created_at': '2022-08-17T17:50:31.889Z',
//     'updated_at': '2022-08-17T17:50:31.889Z',
//     'user_id': 5,
//     'item_id': 1,
//   },
// ];

// logic to cross-reference redux bees and reservations in order to fill in the table

// const filtered = reservations.map((reservation) => {
//   const reservationA = reservation;
//   const beeDetails = bees.find((bee) => bee.id === reservationA.item_id);
//   console.log({ ...reservationA, 'name': beeDetails.name });
//   return { ...reservationA, 'name': beeDetails.name };
// });

function createData(beeName, locationOfBooking, dateBooked, bookingID) {
  return {
    beeName, locationOfBooking, dateBooked, bookingID,
  };
}
// const rowData = filtered.map((reservation) => createData(
//   reservation.name, reservation.city, reservation.date, reservation.id,
// ));

// uncomment this when ready to use
const createRowData = (reservations, bees) => {
  const filtered = reservations.map((reservation) => {
    const reservationA = reservation;
    const beeDetails = bees.find((bee) => bee.id === reservationA.item_id);
    console.log({ ...reservationA, 'name': beeDetails.name });
    return { ...reservationA, 'name': beeDetails.name };
  });

  return filtered.map((reservation) => createData(
    reservation.name, reservation.city, reservation.date, reservation.id,
  ));
};

export default function BasicTable() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const bees = useSelector((state) => state.bees.allBees);
  const reservations = useSelector((state) => state.reservations.allReservations);

  const [userReservations, setUserReservations] = useState(createRowData(reservations, bees));

  useEffect(() => {
    dispatch(getReservations(user.userId));
    setUserReservations(createRowData(reservations, bees));
  }, []);

  return (
    <TableContainer component={Paper} sx={{ border: '1px solid black' }}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'cadetblue' }}>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Name of bee</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">City Booked</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">Date of Booking</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">Keep Booking?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userReservations.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.beeName}
              </TableCell>
              <TableCell align="right">{row.locationOfBooking}</TableCell>
              <TableCell align="right">{row.dateBooked}</TableCell>
              <TableCell align="right"><button type="button">DELETE</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
