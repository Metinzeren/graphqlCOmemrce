import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketList: [],
};

export const basketSlice = createSlice({
  name: "basketList",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.basketList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.basketList[itemIndex].basketCount += 1;
      } else {
        const tempProduct = { ...action.payload, basketCount: 1 };
        state.basketList.push(tempProduct);
      }
    },
    removeToCart(state, action) {
      const nextBasketList = state.basketList.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      state.basketList = nextBasketList;
    },
    decreaseCart(state, action) {
      const itemIndex = state.basketList.findIndex(
        (item) => item.id === action.payload
      );
      if (state.basketList[itemIndex].basketCount > 1) {
        state.basketList[itemIndex].basketCount -= 1;
      } else if (state.basketList[itemIndex].basketCount === 1) {
        const nextBasketList = state.basketList.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        state.basketList = nextBasketList;
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.basketList.findIndex(
        (item) => item.id === action.payload
      );
      state.basketList[itemIndex].basketCount += 1;
    },
  },
});

export const { addToCart, removeToCart, decreaseCart, increaseCart } =
  basketSlice.actions;
export default basketSlice.reducer;
