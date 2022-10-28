import { configureStore } from '@reduxjs/toolkit';

import { userReducer, productsReducer } from './redux-slices';

export const Store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  },
});
