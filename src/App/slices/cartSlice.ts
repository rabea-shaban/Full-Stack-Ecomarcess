import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";
import type { CartItem, IProduct } from "../../interface";

const loadCart = (): CartItem[] => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      const exist = state.items.find((item) => item._id === action.payload._id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaswQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i._id === action.payload);
      if (item) item.quantity += 1;
    },

    decreaswQty: (state, action: PayloadAction<string>) => {
      const item = state.items.find((i) => i._id === action.payload);
      if (!item) return;

      item.quantity -= 1;

      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i._id !== action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, increaswQty, decreaswQty, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
