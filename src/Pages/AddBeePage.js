import { Button, TextField } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React, { useState } from 'react';
import UploadImage from '../Components/UploadImage';
import uploadtoAmazon, { S3_BUCKET } from '../Utilities/AmazonUpload';
import '../Styles/BeeForm.scss';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);

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
      console.log(newBee);
      uploadtoAmazon(selectedFile, setProgress);

      if (progress === 100) {
        e.target.reset();
      }
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
        <UploadImage
          setSelectedFile={setSelectedFile}
          progress={progress}
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
