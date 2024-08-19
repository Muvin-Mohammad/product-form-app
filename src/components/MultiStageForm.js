import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/store';

const MultiStageForm = () => {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct({ ...data, id: Date.now() }));
    setStep(1); // Reset form after submission
  };

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Product Details</h2>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Product Title" />}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Product Description" />}
            />
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Category" />}
            />
            <Controller
              name="regularPrice"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Regular Price" />}
            />
            <Controller
              name="extraPrice"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Extra Price" />}
            />
            <Controller
              name="taxAmount"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Tax Amount" />}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Inventory Details</h2>
            <Controller
              name="weight"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Weight" />}
            />
            <Controller
              name="length"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Length" />}
            />
            <Controller
              name="height"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Height" />}
            />
            <Controller
              name="width"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Width" />}
            />
            <Controller
              name="totalStock"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} placeholder="Total Stock" />}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Add Photos</h2>
            <input type="file" multiple />
            {/* Implement photo upload with preview */}
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Review</h2>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderStep()}
      <div>
        {step > 1 && <button type="button" onClick={handlePrevious}>Previous</button>}
        {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
        {step === 4 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultiStageForm;
