import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './alerts/alertsSlice';
import cartSlice from './cart/cartSlice';
import timerSlice from './timer/timerSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
    timer: timerSlice,
  },
});

export default store;
