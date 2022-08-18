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

const UploadImage = (file, func) => {
  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', (evt) => {
      func(Math.round((evt.loaded / evt.total) * 100));
    })
    .send((err) => err);
};

export default UploadImage;
export { S3_BUCKET };
