import { TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AWS from 'aws-sdk';

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

const UploadImage = (props) => {
  console.log(process.env.REACT_APP_AWS_BUCKET_ACCESS_KEY);
  const { selectedFile, setSelectedFile } = props;
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState({ error: false, message: '' });
  const [disableSubmit, setDisableSubmit] = useState(true);

  const handleFileInput = (e) => {
    if (!e.target.files[0].type.includes('image')) {
      setError({ error: true, message: 'Please select an image file.' });
      e.target.value = null;
    } else if (e.target.files[0].size > 11_000_000) {
      setError({ error: true, message: 'Please select an image less than 10MB.' });
      e.target.value = null;
    } else {
      setSelectedFile(e.target.files[0]);
      setDisableSubmit(false);
    }
  };

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
      })
      .send((err) => err);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="file"
        aria-label="File Upload"
        required
        onChange={handleFileInput}
        error={error.error}
        helperText={error.message}
      />
      <button
        type="button"
        onClick={() => uploadFile(selectedFile)}
        disabled={disableSubmit}
      >
        {' '}
        Upload Image
      </button>
      <div>
        File Upload Progress is
        {' '}
        {progress}
      </div>
    </div>
  );
};

UploadImage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  selectedFile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }),
  setSelectedFile: PropTypes.func.isRequired,
};

export default UploadImage;
