import React from 'react';
import { useFormContext } from 'react-hook-form';

const InventoryDetails = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Inventory Details</h2>
      <label>Weight</label>
      <input type="number" {...register('weight')} />

      <label>Length</label>
      <input type="number" {...register('length')} />

      <label>Height</label>
      <input type="number" {...register('height')} />

      <label>Width</label>
      <input type="number" {...register('width')} />

      <label>Total Stock</label>
      <input type="number" {...register('totalStock')} />
    </div>
  );
};

export default InventoryDetails;
