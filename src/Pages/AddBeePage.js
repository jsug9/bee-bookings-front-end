import { useState } from 'react';
import UploadImage from '../Components/UploadImage';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div>
      <h1>Add Bee Page</h1>
      <div>
        <UploadImage
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </div>
    </div>
  );
};

export default AddBeePage;
