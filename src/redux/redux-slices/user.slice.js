import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  user: {
    name: '',
    lastName: '',
    balance: null,
    previousPurchases: [],
  },
};

const testState = {
  user: {
    name: 'jose ',
    lastName: 'el krak',
    balance: null,
    previousPurchases: ['mucha ropa kbron'],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    set: (state, action) => {
      return { ...state, ...action.payload };
    },

    test: (state, action) => {
      return { ...state, ...testState };
    },

    unset: () => userInitialState,
  },
});

const getProducts = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const products = await response.json();
      dispatch(set(products));
    } catch (error) {
      console.log(error);
    }
  };
};

export const userSelector = state => state.user;

export const { set, unset, test } = userSlice.actions;

export default userSlice.reducer;
