import  React, { useState , useEffect } from 'react'

export const DateTime = () => {
  
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    // Create a timer that updates the 'date' state every second
    var timer = setInterval(()=>setDate(new Date()), 1000 )

    // Return a cleanup function to clear the timer when the component is unmounted
    return function cleanup() {
      clearInterval(timer)
    }

  });

  return(
    <div>
      <p> Current Time: {date.toLocaleTimeString()} </p>
    </div>
  )

}

export default DateTime
