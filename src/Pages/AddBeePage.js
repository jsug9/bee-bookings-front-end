import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useState } from 'react';
import UploadImage from '../Components/UploadImage';
import '../Styles/BeeForm.scss';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <form className="bee-form">
      <h1>Add Your own Bee</h1>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            display: 'flex',
            width: '100%',
            margin: '1rem auto',
          },
        }}
      >
        <div>
          <TextField
            required
            id="name-form"
            label="Name"
          />
        </div>
        <div>
          <TextField
            required
            id="description-form"
            label="Description"
            multiline
            rows={4}
          />
        </div>
      </Box>
      <UploadImage
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <Button
        variant="contained"
        color="success"
        startIcon={<LibraryAddIcon />}
        sx={{ fontWeight: 'bold' }}
      >
        Book bee
      </Button>
    </form>
  );
};

export default AddBeePage;
