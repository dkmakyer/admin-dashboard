import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="firstDateButton p-[3px] rounded" onClick={toggleCalendar}>
        {isOpen ? 'Close Calendar' : `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`}
      </button>
      {isOpen && (
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM"
          showPopperArrow={false}
          inline // This will show the date picker inline
        />
      )}
    </div>
  );
};

export default MyCalendar;