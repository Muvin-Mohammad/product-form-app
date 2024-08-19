import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import ProductDetails from './ProductDetails';
import InventoryDetails from './InventoryDetails';
import AddPhotos from './AddPhotos';
import Review from './Review';

const MultiStepForm = ({ onSubmit }) => {
  const methods = useForm();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    onSubmit(data);
    setStep(1); // Go back to the first step
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        {step === 1 && <ProductDetails />}
        {step === 2 && <InventoryDetails />}
        {step === 3 && <AddPhotos />}
        {step === 4 && <Review />}
        
        <div>
          {step > 1 && (
            <button type="button" onClick={handleBack}>Back</button>
          )}
          {step < 4 && (
            <button type="button" onClick={handleNext}>Next</button>
          )}
          {step === 4 && (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
