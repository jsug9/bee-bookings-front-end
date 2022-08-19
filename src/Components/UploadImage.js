import { TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UploadField = (props) => {
  const {
    setSelectedFile,
    progress,
  } = props;

  const [uploadImageText, setUploadImageText] = useState({ error: false, message: '' });

  const handleFileInput = (e) => {
    if (!e.target.files[0].type.includes('image')) {
      setUploadImageText({
        error: true,
        message: 'Please select an image file.',
      });
      e.target.value = null;
    } else if (e.target.files[0].size > 11_000_000) {
      setUploadImageText({
        error: true,
        message: 'Please select an image less than 10MB.',
      });
      e.target.value = null;
    } else {
      setSelectedFile(e.target.files[0]);
      setUploadImageText({ error: false, message: '' });
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setUploadImageText({ error: false, message: '' });
    } else if (progress > 0) {
      setUploadImageText({ error: false, message: `Uploading ${progress}%` });
    }
  }, [progress]);

  return (
    <div>
      <TextField
        type="file"
        aria-label="File Upload"
        required
        onChange={handleFileInput}
        error={uploadImageText.error}
        helperText={uploadImageText.message}
        sx={{
          '& input': {
            backgroundColor: 'white',
            borderRadius: '4px',
          },
        }}
      />
    </div>
  );
};

UploadField.propTypes = {
  // eslint-disable-next-line react/require-default-props
  selectedFile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }),
  setSelectedFile: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

export default UploadField;
