import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  restartSeconds,
  setActive,
  setMiutes,
  setSeconds,
  /* setActive, */
} from '../store/timer/timerSlice';

const Timer = () => {
  const minutes = useSelector(state => state.timer.minutes);
  const seconds = useSelector(state => state.timer.seconds);
  const active = useSelector(state => state.timer.active);
  console.log(minutes);
  console.log(seconds);
  console.log(active);

  const dispatch = useDispatch();
  if (minutes === -1) {
    dispatch(setActive(false));
  }
  let timer;
  if (active) {
    useEffect(() => {
      timer = setInterval(() => {
        dispatch(setSeconds());
        if (seconds === 1) {
          dispatch(restartSeconds(59));
          dispatch(setMiutes());
        }
      }, 1000);
      return () => clearInterval(timer);
    });
  }
  const minutesRendered = min => {
    if (min < 1) {
      return '00';
    }
    if (min < 10) {
      return `0${minutes}`;
    }
    return min;
  };
  const secondsRendered = (min, secs) => {
    if (min < 0) {
      return '00';
    }
    if (secs < 10) {
      return `0${seconds}`;
    }
    return secs;
  };

  return (
    <p>
      <span>{minutesRendered(minutes)}</span>
      <span>:</span>
      <span>{secondsRendered(minutes, seconds)}</span>
    </p>
  );
};

export default Timer;
