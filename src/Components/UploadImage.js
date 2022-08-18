import { TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UploadImage = (props) => {
  const { setSelectedFile, progress } = props;
  const [helperText, setHelperText] = useState({ error: false, message: '' });

  const handleFileInput = (e) => {
    if (!e.target.files[0].type.includes('image')) {
      setHelperText({
        error: true,
        message: 'Please select an image file.',
      });
      e.target.value = null;
    } else if (e.target.files[0].size > 11_000_000) {
      setHelperText({
        error: true,
        message: 'Please select an image less than 10MB.',
      });
      e.target.value = null;
    } else {
      setSelectedFile(e.target.files[0]);
      setHelperText({ error: false, message: '' });
    }
  };

  const progressStatus = () => {
    if (progress > 0) {
      return (
        <p>
          File Upload Progress is
          {' '}
          {progress}
        </p>
      );
    }
    return (
      <p />
    );
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
        error={helperText.error}
        helperText={helperText.message}
      />
      {progressStatus()}
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
  progress: PropTypes.number.isRequired,
};

export default UploadImage;
