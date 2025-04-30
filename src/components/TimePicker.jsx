import React, { useState, useEffect } from 'react';
import '../App.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicTimePicker({value, onChange}) {
  const [time, setTime] = useState(value || null); 

  useEffect(() => setTime(value), [value]);

  const handleTimeChange = (newValue) => {
    setTime(newValue); // Update local state for UI
    onChange(newValue);
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