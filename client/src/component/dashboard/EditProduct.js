import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct, cancelEdit } from "../../actions/productActions";

const EditProduct = () => {
  const productBeingEdited = useSelector(
    (state) => state.product.productBeingEdited
  );
  const [product, setProduct] = useState(productBeingEdited);

  const dispatch = useDispatch();

  useEffect(() => {
    setProduct(productBeingEdited);
  }, [productBeingEdited]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product));
    dispatch(cancelEdit());
  };

  return (
    <div className="container mt-5">
      <h2 className="text-warning mb-4">Update Product Details</h2>
      <form
        onSubmit={handleSubmit}
        className="border p-4 bg-light shadow-sm rounded"
      >
        <div className="form-row">
          <div className="form-group col-md-7">
            <label className="text-secondary">Product Name</label>
            <input
              type="text"
              className="form-control border-warning"
              name="name"
              placeholder="Enter Product Name"
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-5">
            <label className="text-secondary">Description</label>
            <input
              type="text"
              className="form-control border-warning"
              name="description"
              placeholder="Enter Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label className="text-secondary">Quantity</label>
            <input
              type="text"
              className="form-control border-warning"
              name="qty"
              placeholder="Enter Quantity"
              value={product.qty}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <label className="text-secondary">Measurement</label>
            <select
              name="um"
              className="form-control border-warning"
              value={product.um}
              onChange={handleChange}
            >
              <option value="pieces">Pieces</option>
              <option value="sets">Sets</option>
            </select>
          </div>
          <div className="form-group col-md-3">
            <label className="text-secondary">Price</label>
            <input
              type="text"
              className="form-control border-warning"
              name="price"
              placeholder="Enter Price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label className="text-secondary">Weight</label>
            <input
              type="text"
              className="form-control border-warning"
              name="weight"
              placeholder="Enter Weight"
              value={product.weight}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-warning btn-block">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-block mt-2"
          onClick={() => dispatch(cancelEdit())}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
