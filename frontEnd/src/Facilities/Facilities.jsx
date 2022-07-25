import React from "react";
import './facilities.css';

function Facilities () {
    return(
        <div className='facilitiesContainer'>

            <form className='dForm' action="/">

                <label htmlFor="dName">Facility Name:</label>
                <input
                    type="text">
                </input>

                <label htmlFor="fCustomerID">CustomerID:</label>
                <input
                    type="number"
                    id="fCustomerID"
                    name="dfCustomerID">   
                </input>

                <label htmlFor="fLocation">Location:</label>
                <input
                    type="text"
                    id="fLocation"
                    name="dfLocation">
                </input>

                <input
                    type="submit"
                    value="Submit">
                </input>

            </form>
        </div>
    )
}

export default Facilities;