import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservation } from '../Redux/reservations/ReservationsReducer';
import { getAllBees } from '../Redux/bees/BeesReducer';

function createData(beeName, locationOfBooking, dateBooked, bookingID) {
  return {
    beeName, locationOfBooking, dateBooked, bookingID,
  };
}

const createRowData = (reservations, bees) => {
  const filtered = reservations.map((reservation) => {
    const reservationA = reservation;
    const beeDetails = bees.find((bee) => bee.id === reservationA.item_id);
    return { ...reservationA, 'name': beeDetails.name };
  });
  return filtered.map((reservation) => createData(
    reservation.name, reservation.city, reservation.date, reservation.id,
  ));
};

export default function BasicTable() {
  const dispatch = useDispatch();

  // const user = useSelector((state) => state.user);
  const bees = useSelector((state) => state.bees.allBees);
  const reservations = useSelector((state) => state.reservations.allReservations);

  const [userReservations, setUserReservations] = useState([]);

  const handleClick = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  useEffect(() => {
    // checks if bees has been fetched. If not, fetches bees from the database
    if (bees.length === 0) {
      dispatch(getAllBees());
    }
  }, []);

  useEffect(() => {
    setUserReservations(createRowData(reservations, bees));
  }, [reservations]);

  return (
    <TableContainer component={Paper} sx={{ border: '1px solid black', maxWidth: 800 }}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'cadetblue' }}>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }}>Name of Bee</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">City Booked</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">Date of Booking</TableCell>
            <TableCell sx={{ textAlign: 'center', fontWeight: 'bold' }} align="right">Keep Booking?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userReservations.map((row) => (
            <TableRow
              key={row.bookingID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.beeName}
              </TableCell>
              <TableCell align="center">{row.locationOfBooking}</TableCell>
              <TableCell align="center">{row.dateBooked}</TableCell>
              <TableCell align="center"><button type="button" onClick={() => handleClick(row.bookingID)}>DELETE</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
