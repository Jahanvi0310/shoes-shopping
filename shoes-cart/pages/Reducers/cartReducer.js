import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {},
    subtotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { itemCode, qty, price, name, size, variant } = action.payload;
      if (itemCode in state.items) {
        state.items[itemCode].qty += qty;
      } else {
        state.items[itemCode] = { qty, price, name, size, variant };
      }
      state.subtotal = calculateSubtotal(state.items);
    },
    removeFromCart: (state, action) => {
      const itemCode = action.payload;
      if (itemCode in state.items) {
        delete state.items[itemCode];
        state.subtotal = calculateSubtotal(state.items);
      }
    },
  },
});

const calculateSubtotal = (items) => {
  let subtotal = 0;
  Object.keys(items).forEach((key) => {
    subtotal += items[key].price * items[key].qty;
  });
  return subtotal;
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
