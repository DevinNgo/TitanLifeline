import React, { useState } from 'react';
import '../App.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

let selectedTime = null; //use selectedTime to GET selectedTime from flask backend API after button is pressed

export default function BasicTimePicker() {
  const [time, setTime] = useState(null); // Local state for UI updates

  const handleTimeChange = (newValue) => {
    selectedTime = newValue; // Update global variable
    setTime(newValue); // Update local state for UI
    console.log(selectedTime);
  };

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        className="TimePicker"
        label="Choose a time to park:"
        value={time} // Set the current time as the value
        onChange={handleTimeChange} // Update the state when a new time is selected
        slotProps={{
          layout: {
            sx: {
              ul: {
                '::-webkit-scrollbar': {
                  width: '2px',
                },
              },
            },
          }
        }}
      />
    </LocalizationProvider>
    </>
  );
}