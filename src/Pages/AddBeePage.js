import { Button, TextField } from '@mui/material';
import AWS from 'aws-sdk';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import React, { useState } from 'react';
import UploadImage from '../Components/UploadImage';
import '../Styles/BeeForm.scss';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadImageText, setUploadImageText] = useState({ error: false, message: '' });

  const S3_BUCKET = 'bee-bucket-microverse';
  const REGION = 'us-east-1';

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_AWS_BUCKET_SECRET_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  const uploadFile = (file) => {
    const params = {
      ACL: 'public-read',
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
        setUploadImageText({ error: false, message: 'File Upload Progress is' });
      })
      .send((err) => err);
  };

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
      uploadFile(selectedFile);

      if (progress === 100) {
        setUploadImageText({ error: false, message: '' });
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
          uploadImageText={uploadImageText}
          setUploadImageText={setUploadImageText}
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
