import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [isTimer, setIsTimer] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isTimer) {
      const runningTimer = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);

      return () => clearTimeout(runningTimer);
    }
  }, [isTimer, timer]);

  const startTimer = () => {
    setIsTimer(true);
    setHasStarted(true);
  };

  const stopTimer = () => setIsTimer(false);

  const resetTimer = () => {
    setTimer(0);
    setIsTimer(false);
    setHasStarted(false);
  };

  const value = useMemo(() => ({
    timer,
    isTimer,
    hasStarted,
    startTimer,
    stopTimer,
    resetTimer
  }), [timer, isTimer, hasStarted]);

  return (
    <TimerContext.Provider value={value}>
      {children}
    </TimerContext.Provider>
  );
};

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired
};