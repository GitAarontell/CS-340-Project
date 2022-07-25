import React from "react";
import './deliveries.css';

function Deliveries () {
    return (
        <div className='deliveriesContainer'>
            <form className='dForm' action="/">
                <label htmlFor="dName">Name:</label>
                <input type="text" id="dName" name="dName"/>
                <label htmlFor="dEmail">Email:</label>
                <input type="text"></input>
                <label htmlFor="dLateDeliveries">LateDeliveries:</label>
                <input type="number"></input>
                <label htmlFor="dEarlyDeliveries">EarlyDeliveries:</label>
                <input type="number"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Deliveries;