import { useState } from 'react';
import UploadImage from '../Components/UploadImage';

const AddBeePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div>
      <h1>Add Bee Page</h1>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" id="name" />
        </label>
        <label htmlFor="description">
          Description
          <input type="text" id="description" />
        </label>
        <UploadImage
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </form>
    </div>
  );
};

export default AddBeePage;
