import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

function Main() {
  const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  };

  const updateTimes = (state, action) => {
    return initializeTimes();
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default Main;