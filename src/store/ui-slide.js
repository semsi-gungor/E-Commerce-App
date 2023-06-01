import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddedProduct: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showAddedProduct(state) {
      state.showAddedProduct = true;
      setTimeout(() => {
        state.showAddedProduct = false;
      }, 2000);
    },
  },
});
