import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AddReservationPage from './Pages/AddReservationPage';
import ReservationsPage from './Pages/ReservationsPage';
import AddBeePage from './Pages/AddBeePage';
import DeleteBeePage from './Pages/DeleteBeePage';
import BeeDetailsPage from './Pages/BeeDetailsPage';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/:bee" element={<BeeDetailsPage />} />
      <Route path="/add_reservation" element={<AddReservationPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/add_bee" element={<AddBeePage />} />
      <Route path="/delete_bee" element={<DeleteBeePage />} />
    </Routes>
  </Router>
);

export default App;
