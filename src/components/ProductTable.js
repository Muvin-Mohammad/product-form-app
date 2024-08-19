import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const ProductTable = ({ products, onDelete, onView }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Product Title', width: 150 },
    { field: 'description', headerName: 'Details', width: 200 },
    { field: 'status', headerName: 'Status', width: 110 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'priceAfterVAT', headerName: 'Price with VAT', width: 150 },
    { field: 'priceWithoutVAT', headerName: 'Price without VAT', width: 180 },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => (
        <div>
          <button onClick={() => onView(params.row)}>View</button>
          <button onClick={() => onDelete(params.row.id)}>Delete</button>
        </div>
      )
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductTable;
