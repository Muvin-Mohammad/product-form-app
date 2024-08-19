import React, { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import ProductTable from './components/ProductTable';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFormSubmit = (product) => {
    const priceAfterVAT = parseFloat(product.regularPrice) + parseFloat(product.regularPrice) * (parseFloat(product.taxAmount) / 100);
    const priceWithoutVAT = parseFloat(product.regularPrice);
    const newProduct = {
      ...product,
      id: products.length + 1,
      status: 'Submitted',
      priceAfterVAT,
      priceWithoutVAT
    };
    setProducts([...products, newProduct]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleView = (product) => {
    setSelectedProduct(product);
    // Display the selected product details in a modal or another component as needed
    console.log('Viewing product:', product);
  };

  return (
    <div>
      <MultiStepForm onSubmit={handleFormSubmit} />
      <ProductTable products={products} onDelete={handleDelete} onView={handleView} />
      {selectedProduct && (
        <div>
          <h2>Product Details</h2>
          {/* Display detailed information about the selected product */}
          <pre>{JSON.stringify(selectedProduct, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
