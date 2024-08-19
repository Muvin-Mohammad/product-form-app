import React from 'react';
import { useFormContext } from 'react-hook-form';

const ProductDetails = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Product Details</h2>
      <label>Title</label>
      <input {...register('title')} />

      <label>Description</label>
      <input {...register('description')} />

      <label>Category</label>
      <input {...register('category')} />

      <label>Regular Price</label>
      <input type="number" {...register('regularPrice')} />

      <label>Extra Price</label>
      <input type="number" {...register('extraPrice')} />

      <label>Tax Amount</label>
      <input type="number" {...register('taxAmount')} />
    </div>
  );
};

export default ProductDetails;
