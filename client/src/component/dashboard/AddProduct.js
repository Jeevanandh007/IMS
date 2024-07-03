import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/productActions';

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
      name: '',
      qty: 0,
      um: 'pieces',
      price: 0,
      weight: 0,
      description: ''
    });

    const dispatch = useDispatch();

    const handleChange = e => {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value
      });
    };

    
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addProduct(newProduct));

    setNewProduct({
      name: '',
      qty: 0,
      um: 'pieces',
      price: 0,
      weight: 0,
      description: ''
    });
  };

  
  const { name, qty, um, price, weight, description } = newProduct;

  return (
    <div className="container mt-5">
      <h2 className="text-success mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="border p-4 bg-light shadow-sm rounded">
        <div className="form-row">
          <div className="form-group col-md-7">
            <label className="text-primary">Product Name</label>
            <input
              type="text"
              className="form-control border-info"
              name="name"
              placeholder="Enter Product Name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label className="text-primary">Description</label>
            <input
              type="text"
              className="form-control border-info"
              name="description"
              placeholder="Enter Description"
              value={description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label className="text-primary">Quantity</label>
            <input
              type="text"
              className="form-control border-info"
              name="qty"
              placeholder="Enter Quantity"
              value={qty}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label className="text-primary">Measurement</label>
            <select
              name="um"
              className="form-control border-info"
              value={um}
              onChange={handleChange}
            >
              <option value="pieces">Pieces</option>
              <option value="sets">Sets</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label className="text-primary">Price</label>
            <input
              type="text"
              className="form-control border-info"
              name="price"
              placeholder="Enter Price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label className="text-primary">Weight</label>
            <input
              type="text"
              className="form-control border-info"
              name="weight"
              placeholder="Enter Weight"
              value={weight}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-info btn-block">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
