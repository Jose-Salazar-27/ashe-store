import { createSlice } from '@reduxjs/toolkit';

export const productsInitialState = {
  products: [],
  currentCategory: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    get: (state, action) => {
      return { ...state, ...action.payload };
    },
    filter: (state, action) => {
      return { ...state, currentCategory: action.payload };
    },
  },
});

export const setProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const products = await response.json();
      dispatch(get(products));
    } catch (error) {
      console.log(error);
    }
  };
};

export const productsSelector = state => state.products;

export const { get, filter } = productsSlice.actions;

export default productsSlice.reducer;
