import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
        state.total += 1;
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
        state.total += 1;
      }
    },
    removeItem(state, action) {
      const toDeleteItemId = action.payload;
      const Item = state.items;
      console.log(Item);
      if (Item === 1) {
        state.items = state.items.filter(item => item.id !== toDeleteItemId);
        state.total -= 1;
      } else {
        state.items.quantity -= 1;
        state.items.totalPrice -= state.items.price;
        state.total -= 1;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
