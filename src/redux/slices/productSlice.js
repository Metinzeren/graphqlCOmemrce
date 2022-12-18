import { createSlice } from "@reduxjs/toolkit";
import client from "../../apollo";
import { GET_PRODUCTS } from "../../services/queries";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const fetchGetProducts = () => (dispatch) => {
  dispatch(setLoading(true));
  client
    .query({
      query: GET_PRODUCTS,
    })
    .then((result) => {
      dispatch(setProducts(result.data.products));
    })
    .catch((error) => {
      dispatch(setError(error));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const getProducts = (state) => {
  return state.product;
};

export const { setProducts, setError, setLoading } = productSlice.actions;

export default productSlice.reducer;
