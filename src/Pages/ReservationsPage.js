import { useSelector } from 'react-redux';

const ReservationsPage = () => {
  const user = useSelector((state) => state.user);

  if (user.userId) {
    return (
      <div>
        <h1>
          signed in!
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>
        {'hi '}
        {user?.username || ' user'}
      </h1>
    </div>
  );
};

export default ReservationsPage;
