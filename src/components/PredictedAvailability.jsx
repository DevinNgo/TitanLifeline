import React, { useEffect, useState } from "react";
import "../App.css";

function PredictedAvailability() {
    const [data, setData] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        const queryURL = new URLSearchParams(window.location.search);
        const timeURL = queryURL.get('time');
        if(timeURL)
            setSelectedTime(timeURL);

        const fetchData = async () => {
        try {
            const res = await fetch("https://parking-scraper.onrender.com/api/predict");
            const json = await res.json();
            setData(json.predictions);
        } catch (err) {
            console.error("Failed to fetch parking data:", err);
        }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000);

        return () => clearInterval(interval);
    }, []);

    if (data === null) {
        return (
        <div>
            <h1 className="font-bold">Available Parking Spaces</h1>
            <p>Loading...</p>
        </div>
        );
    }
    const predictedSpots = selectedTime ? data[selectedTime] : null;
    return (
        <div>
        <h1 className="font-bold">Predicted Parking Spaces</h1>
        <table>
            <tbody>
            {Object.entries(predictedSpots).map(([structure, index]) => (
                <tr>
                <td>
                    <a href="#" className="aps_link">{structure}</a>
                    <br/>
                </td>
                <td className="spots">{index}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default PredictedAvailability;
