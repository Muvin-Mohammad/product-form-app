import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../store/store';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const columns = [
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'regularPrice', headerName: 'Regular Price', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <button onClick={() => dispatch(deleteProduct(params.id))}>Delete</button>
      ),
      width: 100,
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    title: product.title,
    category: product.category,
    regularPrice: product.regularPrice,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
};

export default ProductList;
