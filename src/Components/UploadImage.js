import React, { useState } from 'react';
import AWS from 'aws-sdk';

const S3_BUCKET = 'bee-bucket-microverse';
const REGION = 'us-east-1';

AWS.config.update({
  accessKeyId: 'AKIATPPJB3KR6KYQHK4P',
  secretAccessKey: '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',
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImage = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
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
      <div>
        File Upload Progress is
        {progress}
      </div>
      <input type="file" onChange={handleFileInput} />
      <button type="button" onClick={() => uploadFile(selectedFile)}>
        {' '}
        Upload to S3
      </button>
      {selectedFile && (
        <img
          src={`https://bee-bucket-microverse.s3.amazonaws.com/${selectedFile.name}`}
          alt=""
        />
      )}
    </div>
  );
};

export default UploadImage;
