import React from "react";
import './orders.css';

function Orders () {
    return(
        <div className='ordersContainer'>

            <form className='dForm' action="/">

                <label htmlFor="oCustomerID">Customer ID:</label>
                <input
                    type="number"
                    id="oCustomerID"
                    name="doCustomerID">
                </input>

                <label htmlFor="oStartingFacility">Starting Facility ID:</label>
                <input
                    type="text"
                    id="oStartingFacility"
                    name="doStartingFacility">
                </input>

                <label htmlFor="oEndingFacility">Ending Facility ID:</label>
                <input
                    type="text"
                    id="oEndingFacility"
                    name="doEndingFacility">
                </input>

                <label htmlFor="oCurrentFacility">Current Facility ID:</label>
                <input
                    type="text"
                    id="oCurrentFacility"
                    name="doCurrentFacility">
                </input>

                <label htmlFor="oVolume">Volume:</label>
                <input
                    type="number"
                    id="oVolume"
                    name="doVolume">
                </input>

                <label htmlFor="oWeight">Weight:</label>
                <input
                    type="number"
                    id="oWeight"
                    name="doWeight">
                </input>

                <input type="submit" value="Submit"></input>

            </form>

        </div>
    )
}

export default Orders;