import React, { useState } from 'react';
import Main from './Main';
function BookingForm(props) {
  const [date, setDate] = useState("");
  const { availableTimes, dispatch } = props;

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: "updateTimes", payload: event.target.value });
  };

  return (
    <div>
      <form>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" onChange={handleDateChange} />

        <label htmlFor="time">Time:</label>
        <select id="time" name="time">
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookingForm;