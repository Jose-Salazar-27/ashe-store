import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './redux-slices';

export const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});
