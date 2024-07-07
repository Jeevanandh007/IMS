import axios from "axios";

import {
  PRODUCTS_LOADING,
  GET_PRODUCTS,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  CANCEL_EDIT,
  UPDATED_PRODUCT,
  DELETE_PRODUCTS,
} from "../actions/types";
import { toastException, toastSuccess } from "../helpers";

// Get products
export const getProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCTS_LOADING });

  try {
    const res = await axios.get("/api/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (exception) {
    toastException(exception);
  }
};

// Add product
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const res = await axios.post("/api/products/add", newProduct);

    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    toastSuccess("Product created successfully");
  } catch (exception) {
    toastException(exception);
  }
};

// Edit Product
export const editProduct = (product) => (dispatch) => {
  dispatch({
    type: EDIT_PRODUCT,
    payload: product,
  });
};

// Cancel Edit
export const cancelEdit = () => (dispatch) => {
  dispatch({ type: CANCEL_EDIT });
};

//update product
export const updateProduct = (updatedProduct) => async (dispatch) => {
  try {
    const res = await axios.put(
      `/api/products/update/${updatedProduct._id}`,
      updatedProduct
    );

    dispatch({
      type: UPDATED_PRODUCT,
      payload: res.data,
    });

    toastSuccess("Product updated successfully");
  } catch (exception) {
    toastException(exception);
  }
};

//delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/products/${id}`);

    dispatch({
      type: DELETE_PRODUCTS,
      payload: res.data,
    });

    toastSuccess("Product deleted successfully");
  } catch (exception) {
    toastException(exception);
  }
};
