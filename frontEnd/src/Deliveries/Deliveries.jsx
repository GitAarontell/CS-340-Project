import React from "react";
import './deliveries.css';

function Deliveries () {
    return (
        <div className='deliveriesContainer'>

            <form className='dForm' action="/">

                <label htmlFor="dDriverID">Driver ID:</label>
                <input
                    type="number"
                    id="dDriverID"
                    name="ddDriverID">
                </input>

                <label htmlFor="dTruckID">Truck ID:</label>
                <input
                    type="number"
                    id="dTruckID"
                    name="ddTruckID">
                </input>

                <label htmlFor="dStartingFacility">Starting Facility ID:</label>
                <input
                    type="text"
                    id="dStartingFacility"
                    name="ddStartingFacility">
                </input>


                <label htmlFor="dEndingFacility">Ending Facility ID:</label>
                <input
                    type="text"
                    id="dEndingFacility"
                    name="ddEndingFacility">
                </input>

                <label htmlFor="dTotalVolume"> Total Volume:</label>
                <input
                    type="number"
                    id="dTotalVolume"
                    name="ddTotalVolume">
                </input>

                <label htmlFor="dTotalWeight">Total Weight:</label>
                <input
                    type="number"
                    id="dTotalWeight"
                    name="dTotalWeight">
                </input>

                <label htmlFor="dLate">Late:</label>
                <input
                    type="number"
                    id="dLate"
                    name="ddLate">
                </input>

                <label htmlFor="dDepartureTime">Departure Time:</label>
                <input
                    type="time"
                    id="dDepartureTime"
                    name="dDepartureTime">
                </input>

                <label htmlFor="dExpectedTime">Expected Arrival Time:</label>
                <input
                    type="time"
                    id="dExpectedTime"
                    name="dExpectedTime">
                </input>

                <label htmlFor="dActualTime">Actual Arrival Time:</label>
                <input
                    type="time"
                    id="dActualTime"
                    name="dActualTime">
                </input>
                
                <input type="submit" value="Submit"></input>

            </form>

        </div>
    );
}

export default Deliveries;