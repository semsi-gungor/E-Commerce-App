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
    },
    hideAddedProduct(state) {
      state.showAddedProduct = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
