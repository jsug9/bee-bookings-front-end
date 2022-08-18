import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Select, MenuItem, InputLabel, FormControl, Button,
} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useNavigate } from 'react-router-dom';
import { getAllBees, deleteBee } from '../Redux/bees/BeesReducer';
import '../Styles/BeeForm.scss';
import '../Styles/ReservationForm.scss';

const DeleteBeePage = () => {
  const navigate = useNavigate();
  const [beeId, setBeeId] = useState('');
  const dispatch = useDispatch();
  const bees = useSelector((state) => state.bees.allBees);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    dispatch(getAllBees());
  }, []);

  useEffect(() => {
    bees.forEach((bee) => {
      if (bee.id > 19) {
        setEmpty(false);
      }
    });
  }, [bees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteBee(beeId));
    navigate('/');
  };

  return (
    <div className="reservation-form-container">
      <form className="bee-form reservation-form" method="post" onSubmit={handleSubmit}>
        <h1 style={{ 'margin-bottom': '30px' }}>Delete a Bee</h1>
        <FormControl>
          <InputLabel id="bee-label">Bee</InputLabel>
          <Select required labelId="bee-label" label="Bee" style={{ 'background-color': 'white', 'margin-bottom': '20px' }} value={beeId} onChange={(e) => { setBeeId(e.target.value); }}>
            {bees.map((bee) => {
              if (bee.id > 19) {
                return (
                  <MenuItem value={bee.id} key={bee.id}>
                    {bee.name}
                  </MenuItem>
                );
              }
              return null;
            })}
            {empty && <MenuItem value="">No Bees to Delete</MenuItem>}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="success"
          startIcon={<RemoveCircleIcon />}
          sx={{
            fontWeight: 'bold', marginTop: '20px', width: '300px', alignSelf: 'center',
          }}
        >
          Delete Bee
        </Button>
      </form>
    </div>
  );
};
export default DeleteBeePage;
