import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  minutes: 0,
  seconds: 10,
  active: true,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setSeconds: state => {
      state.seconds -= 1;
    },
    restartSeconds: (state, action) => {
      state.seconds = action.payload;
    },
    setMiutes: state => {
      state.minutes -= 1;
    },
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});
export const { setSeconds, setMiutes, restartSeconds, setActive } =
  timerSlice.actions;
export default timerSlice.reducer;
