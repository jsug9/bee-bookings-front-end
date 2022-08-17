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
      <div>
        <UploadImage
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
      <Button
        variant="contained"
        color="success"
        startIcon={<LibraryAddIcon />}
        sx={{ fontWeight: 'bold' }}
        type="submit"
        className="submit-button"
      >
        Add bee
      </Button>
    </form>
  );
};

export default AddBeePage;
