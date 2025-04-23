import React, { useEffect, useState } from "react";
import "../App.css";

function CurrentAvailability() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch("https://parking-scraper.onrender.com/api/parking");
            const json = await res.json();
            setData(json.data);
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

    return (
        <div>
        <h1 className="font-bold">Available Parking Spaces</h1>
        <table>
            <tbody>
            {data.map((structure, index) => (
                <tr key={index}>
                <td>
                    <a href="#" className="aps_link">{structure.structure}</a>
                    <br/>
                    <span className="details">
                    Total Spots {structure.totalSpots}
                    <br/>
                    {
                        structure.structure === "Fullerton Free Church"
                        ? "01/21/2025 - 05/08/2025"
                        : structure.lastUpdated
                    }
                    </span> 
                    <br/>
                </td>
                <td className="spots">{structure.availableSpots}</td>
                <td>
                    <a href="#" className="aps_link">Levels ({index + 1})</a>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default CurrentAvailability;
