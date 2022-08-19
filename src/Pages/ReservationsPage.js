import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasicTable from '../Components/Table';
import '../Styles/ReservationsPage.scss';
import { getReservations } from '../Redux/reservations/ReservationsReducer';
import { getAllBees } from '../Redux/bees/BeesReducer';

const loginNotice = () => (
  <div className="center">
    <h1>
      Please sign in to use this page
    </h1>
  </div>
);

const emptyReservationsNotice = () => (
  <div className="center">
    <h1>
      No Bees Booked 🐝
    </h1>
  </div>
);

const ReservationsPage = () => {
  const user = useSelector((state) => state.user);
  const bees = useSelector((state) => state.bees.allBees);
  const reservations = useSelector((state) => state.reservations.allReservations);

  const dispatch = useDispatch();

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    // checks if bees has been fetched. If not, fetches bees from the database
    if (bees.length === 0) {
      dispatch(getAllBees());
    }
    dispatch(getReservations(user.userId));
  }, [user]);

  useEffect(() => {
    // checks if bees has been fetched. If not, fetches bees from the database
    if (reservations.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [reservations]);

  if (user.userId && isEmpty) {
    return emptyReservationsNotice();
  }

  if (user.userId) {
    return (
      <div className="reservations">
        <h1 className="bookTableHeader">
          {'Bees booked by '}
          {user?.username}
        </h1>
        <BasicTable />
      </div>
    );
  }

  return loginNotice();
};

export default ReservationsPage;
