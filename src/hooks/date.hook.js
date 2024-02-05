import dayjs from 'dayjs';
import { useState } from 'react';

const useDateRange = () => {
  const [_startDate, setStartDate] = useState(dayjs().startOf('month'));
  const [_endDate, setEndDate] = useState(dayjs());

  const startDate =  dayjs(_startDate).format('YYYY-MM-DD')
  const endDate =  dayjs(_endDate).format('YYYY-MM-DD')

  const updateStartDate = (newStartDate) => {
    setStartDate(newStartDate);
  };

  const updateEndDate = (newEndDate) => {
    setEndDate(newEndDate);
  };

  const resetDateRange = () => {
    setStartDate(startOfMonth);
    setEndDate(startOfToday);
  };

  return {
    _startDate,
    _endDate,
    startDate,
    endDate,
    updateStartDate,
    updateEndDate,
    resetDateRange,
  };
};

export default useDateRange;