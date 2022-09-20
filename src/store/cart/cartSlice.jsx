import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  showCart: false,
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
    removeItemFromCart() {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
