import { Button, TextField } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UploadField from '../Components/UploadImage';
import UploadImage, { S3_BUCKET } from '../Utilities/AmazonUpload';
import { addBee } from '../Redux/bees/BeesReducer';
import '../Styles/BeeForm.scss';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const beeName = e.target.name.value;
    const beeDescription = e.target.description.value;
    const beeImage = `https://s3.amazonaws.com/${S3_BUCKET}/${selectedFile.name}`;

    if (beeName.trim() && beeDescription.trim() && beeImage) {
      const newBee = {
        name: beeName,
        description: beeDescription,
        image: beeImage,
      };
      UploadImage(selectedFile, setProgress, e, dispatch(addBee(newBee)));
    }
  };

  return (
    <form className="bee-form" onSubmit={handleSubmit}>
      <h1>Add Your own Bee</h1>
      <div>
        <TextField
          required
          id="name-form"
          label="Name"
          name="name"
        />
      </div>
      <div>
        <TextField
          required
          id="description-form"
          label="Description"
          multiline
          rows={4}
          name="description"
        />
      </div>
      <div>
        <UploadField setSelectedFile={setSelectedFile} progress={progress} />
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
