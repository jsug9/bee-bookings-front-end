import React from 'react';
import { useSelector } from 'react-redux';
import BasicTable from '../Components/Table';

const loginNotice = () => (
  <div>
    <h1>
      Please sign in to use this page
    </h1>
  </div>
);

const ReservationsPage = () => {
  const user = useSelector((state) => state.user);

  if (user.userId ) {
    return (
      <div>
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
