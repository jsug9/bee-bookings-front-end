import AWS from 'aws-sdk';

const S3_BUCKET = 'bucketybucketybucketybucket';
const REGION = 'sa-east-1';

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_BUCKET_SECRET_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImage = (file, setProgress, e, dispatch) => {
  const params = {
    ACL: 'public-read',
    Body: file,
    Bucket: S3_BUCKET,
    Key: file.name,
  };

  myBucket
    .putObject(params)
    .on('httpUploadProgress', (evt) => {
      const progress = Math.round((evt.loaded * 100) / evt.total);
      setProgress(progress);
      if (progress === 100) {
        e.target.reset();
        dispatch();
      }
    })
    .send((err) => err);
};

export default UploadImage;
export { S3_BUCKET };
