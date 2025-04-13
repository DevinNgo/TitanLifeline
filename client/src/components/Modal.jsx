import React, { useState } from "react";
import BasicTimePicker from "./TimePicker.jsx"
import "./Modal.css";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
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
                    <BasicTimePicker/>
                </div>
                <button className="close-modal bg-indigo-300 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
                    CLOSE
                </button>
            </div>
            </div>
        )}
        </>
    );
    }