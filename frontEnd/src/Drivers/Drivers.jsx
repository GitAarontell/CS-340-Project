import React from "react";
import './drivers.css';

function Drivers () {
    return (
        <div className='driversContainer'>

            <form className='dForm' action="/">
                
                <label htmlFor="dName">Name:</label>
                <input
                    type="text"
                    id="dName"
                    name="ddName">
                </input>

                <label htmlFor="dEmail">Email:</label>
                <input
                    type="text"
                    id="dEmail"
                    name="ddEmail">
                </input>

                <label htmlFor="dLateDeliveries">Late Deliveries:</label>
                <input
                    type="number"
                    id="dLateDeliveries"
                    name="ddLateDeliveries">
                </input>

                <label htmlFor="dEarlyDeliveries">Early Deliveries:</label>
                <input
                    type="number"
                    id="dEarlyDeliveries"
                    name="ddEarlyDeliveries">
                </input>

                <input type="submit" value="Submit"></input>

            </form>

        </div>
    );
}

export default Drivers