import './App.css';
import React, { useEffect, useState } from "react";
import PredictedMap from "./components/PredictedMap.jsx";
import Legend from "./components/Legend.jsx";
import PredictedAvailability from './components/PredictedAvailability.jsx';

function Prediction() {
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        const queryURL = new URLSearchParams(window.location.search);
        const timeURL = queryURL.get('time');
        if(timeURL)
            setSelectedTime(timeURL);
    }, [])

    const formatTime = (time) => {
        if(!time)
            return "";
        const [hours, minutes] = time.split(':');
        const formats = new Date();
        formats.setHours(hours);
        formats.setMinutes(minutes);
        return formats.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});
    };

    return (
        <div className="prediction">
        <div className="header font-bold text-center pt-4">
            <h1 className="time_predict_text pb-4">
                Predicted availability at: {formatTime(selectedTime)}
            </h1>
            <a href="/" className="bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                Back to Current Availability
            </a>
        </div>
        <div className="flex justify-center pt-4 divide-x-2 divide-gray-200">
            <div className="px-4 hidden lg:block">
                <PredictedMap/>
            </div>
            <div className="px-4 hidden lg:block">
                <Legend/>
            </div>
            <div className="px-4 hidden lg:block">
                <PredictedAvailability/>
            </div>
        </div>
        <div className="flex justify-center border p-4 lg:hidden">
            <PredictedMap/>
        </div>
        <div className="flex justify-center border p-4 lg:hidden">
            <PredictedAvailability/>
        </div>
        <div className="flex justify-center border p-4 lg:hidden">
            <Legend/>
        </div>
        </div>
    )
}

export default Prediction
