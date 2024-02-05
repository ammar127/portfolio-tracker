// DateRangeContext.js
import React, { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  const [_startDate, setStartDate] = useState(dayjs().startOf('month'));
  const [_endDate, setEndDate] = useState(dayjs());

  const startDate = dayjs(_startDate).format('YYYY-MM-DD')
  const endDate = dayjs(_endDate).format('YYYY-MM-DD')

  const updateStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const updateEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const resetDateRange = () => {
    setStartDate(dayjs().startOf('month'));
    setEndDate(dayjs());
  };


  return (
    <DateRangeContext.Provider
      value={{ startDate, endDate, _startDate, _endDate, updateStartDate, updateEndDate, resetDateRange }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  if (!context) {
    throw new Error('useDateRange must be used within a DateRangeProvider');
  }
  return context;
};
