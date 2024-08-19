import React from 'react';
import { useFormContext } from 'react-hook-form';

const Review = () => {
  const { getValues } = useFormContext();
  const values = getValues();
  const { photos } = values;

  return (
    <div>
      <h2>Review Your Details</h2>
      <p><strong>Title:</strong> {values.title}</p>
      <p><strong>Description:</strong> {values.description}</p>
      <p><strong>Category:</strong> {values.category}</p>
      <p><strong>Regular Price:</strong> {values.regularPrice}</p>
      <p><strong>Extra Price:</strong> {values.extraPrice}</p>
      <p><strong>Tax Amount:</strong> {values.taxAmount}</p>
      <p><strong>Weight:</strong> {values.weight}</p>
      <p><strong>Length:</strong> {values.length}</p>
      <p><strong>Height:</strong> {values.height}</p>
      <p><strong>Width:</strong> {values.width}</p>
      <p><strong>Total Stock:</strong> {values.totalStock}</p>
      {photos && photos.length > 0 && (
        <div>
          <h4>Photos:</h4>
          {Array.from(photos).map((photo, index) => (
            <img key={index} src={URL.createObjectURL(photo)} alt={`Photo ${index + 1}`} width="100" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
