import React from "react";
import { useDispatch } from "react-redux";
import { editProduct, deleteProduct } from "../../actions/productActions";

const Product = ({ product, index }) => {
  const dispatch = useDispatch();
  const priceSum = product.qty * product.price;
  const weightSum = product.qty * product.weight;

  return (
    <tr>
      <th scope="row" className="text-center">
        {index + 1}
      </th>
      <td className="text-info">{product.name}</td>
      <td className="text-success">{product.qty}</td>
      <td className="text-secondary">{product.um}</td>
      <td className="text-warning">
        {"$"}
        {product.price.toFixed(2)}
      </td>
      <td className="text-warning">
        {"$"}
        {priceSum.toFixed(2)}
      </td>
      <td className="text-info">{product.weight.toFixed(2)}</td>
      <td className="text-success">{weightSum.toFixed(2)}</td>
      <td className="text-muted">{product.description}</td>
      <td>
        <button
          type="button"
          className="btn btn-outline-warning btn-sm mr-2"
          onClick={() => dispatch(editProduct(product))}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(deleteProduct(product._id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
