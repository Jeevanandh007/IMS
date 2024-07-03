import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts } from '../../actions/productActions';
import Product from './Product';

const Table = () => {
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);

    
    
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Product Inventory</h2>
      <table className="table table-hover bg-light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">UM</th>
            <th scope="col">Price ($)</th>
            <th scope="col">Total Price ($)</th>
            <th scope="col">Weight (kg)</th>
            <th scope="col">Total Weight (kg)</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <Product key={product._id} product={product} index={index} />
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center text-danger">
                No Products Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;