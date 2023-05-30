import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  itemCount: 0,
  status: STATUS.IDLE,
  errorMessage: "",
};

export const sendFavorites = createAsyncThunk(
  "favorites/post",
  async (favorites, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/favorites.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(favorites),
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "favorites/get",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://react-http-1cb42-default-rtdb.europe-west1.firebasedatabase.app/favorites.json"
      );

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToCart(state, action) {
      const favItemId = action.payload.favItemId;
      const existingItem = state.products?.find(
        (item) => item.favItemId === favItemId
      );

      if (!existingItem) {
        state.products.push(action.payload);
        state.itemCount++;
      } else {
        return;
      }
    },
    removeFromCart(state, action) {
      const favItemId = action.payload;
      state.itemCount--;
      state.products = state.products.filter(
        (item) => item.favItemId !== favItemId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavorites.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.status = STATUS.SUCCSESS;
      state.products = action.payload.products || [];
      state.itemCount = action.payload.itemCount;
    });
    builder.addCase(sendFavorites.pending, (state) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(sendFavorites.fulfilled, (state, action) => {
      state.status = STATUS.SUCCSESS;
      state.products = action.payload.products || [];
      state.itemCount = action.payload.itemCount;
    });
  },
});

export const favoritesAcitons = favoritesSlice.actions;
export default favoritesSlice.reducer;
