import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  itemCount: 0,
  totalAmount: 0,
  getStatus: STATUS.IDLE,
  setStatus: STATUS.IDLE,
  errorMessage: "",
};

export const sendCart = createAsyncThunk(
  "cart/post",
  async (cart, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/newcart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  "cart/get",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/newcart.json"
      );

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cartItemId = action.payload.cartItemId;
      console.log(action.payload);
      const existingItem = state.products?.find(
        (item) => item.cartItemId === cartItemId
      );

      if (!existingItem) {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        state.itemCount++;
        state.totalAmount += parseInt(action.payload.price);
      } else {
        state.itemCount++;
        state.totalAmount += parseInt(action.payload.price);
        existingItem.quantity++;
      }
    },
    removeFromCart(state, action) {
      const cartItemId = action.payload;
      const existingItem = state.products.find(
        (item) => item.cartItemId === cartItemId
      );
      state.itemCount--;
      state.totalAmount = state.totalAmount - parseInt(existingItem.price);
      if (existingItem.quantity === 1) {
        state.products = state.products.filter(
          (item) => item.cartItemId !== cartItemId
        );
      } else {
        existingItem.quantity--;
      }
    },
    idleStatus(state) {
      state.setStatus = STATUS.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {
      state.getStatus = STATUS.LOADING;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.getStatus = STATUS.SUCCSESS;
      state.products = action.payload.products || [];
      state.itemCount = action.payload.itemCount;
      state.totalAmount = action.payload.totalAmount;
    });
    builder.addCase(sendCart.pending, (state) => {
      state.setStatus = STATUS.LOADING;
    });
    builder.addCase(sendCart.fulfilled, (state, action) => {
      state.setStatus = STATUS.SUCCSESS;
      state.products = action.payload.products || [];
      state.itemCount = action.payload.itemCount;
      state.totalAmount = action.payload.totalAmount;
    });
  },
});

export const cartAcitons = cartSlice.actions;
export default cartSlice.reducer;
