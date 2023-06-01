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

export const uiAcitons = uiSlice.actions;
export default uiSlice.reducer;
