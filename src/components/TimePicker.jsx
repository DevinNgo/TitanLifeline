import React, { useState } from 'react';
import '../App.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker() {
  const [selectedTime, setSelectedTime] = useState(dayjs()); // Store the selected time in state

  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue); // Update the state with the selected time
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        className="TimePicker"
        label="Choose a time to park:"
        value={selectedTime} // Set the current time as the value
        onChange={handleTimeChange} // Update the state when a new time is selected
      />
    </LocalizationProvider>
  );
}