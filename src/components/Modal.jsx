import React, { useState } from "react";
import BasicTimePicker from "./TimePicker.jsx"
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const toggleModal = () => {
        setModal(!modal);
    };

    const handleSearch = () => {
        const t = selectedTime.format("HH:mm:ss")
        window.location.href = `/prediction?time=${encodeURIComponent(t)}`; // URL for prediction
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
        <button onClick={toggleModal} className="bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded">
            Check future parking availability!
        </button>

        {modal && (
            <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2>Check future parking availability</h2>
                <div className="select-time py-4">
                    <BasicTimePicker
                        value = {selectedTime}
                        onChange = {setSelectedTime}
                    />
                </div>
                <button className="close-modal bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded" onClick={handleSearch} disabled={!selectedTime}>
                    SEARCH
                </button>
                <button className="close-modal bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
                    CLOSE
                </button>
            </div>
            </div>
        )}
        </>
    );
    }