import { useSelector } from 'react-redux';

const loginNotice = () => (
  <div>
    <h1>
      Please sign in to use this page
    </h1>
  </div>
);

const ReservationsPage = () => {
  const user = useSelector((state) => state.user);

  if (user.userId) {
    return (
      <div>
        <h1>
          {'hi '}
          {user?.username || ' user'}
        </h1>
      </div>
    );
  }

  return loginNotice();
};

export default ReservationsPage;
