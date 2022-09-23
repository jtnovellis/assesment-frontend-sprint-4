import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './alerts/alertsSlice';
import cartSlice from './cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
  },
});

export default store;
