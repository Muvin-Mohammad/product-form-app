import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

const AddPhotos = () => {
  const { register, setValue } = useFormContext();
  const [photoPreviews, setPhotoPreviews] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map(file => URL.createObjectURL(file));
    setPhotoPreviews(fileUrls);
    setValue('photos', files); // Store files in the form state
  };

  return (
    <div>
      <h2>Add Photos</h2>
      <input type="file" multiple accept="image/*" {...register('photos')} onChange={handlePhotoUpload} />
      <div>
        {photoPreviews.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} width="100" />
        ))}
      </div>
    </div>
  );
};

export default AddPhotos;
