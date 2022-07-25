import React from "react";
import './facilities.css';

function Facilities () {
    return(
        <div className='facilitiesContainer'>
            <form className='dForm' action="/">
                <label htmlFor="dFacilityID">FacilityID:</label>
                <input type="number" id="dName" name="dName"/>
                <label htmlFor="customerID">customerID:</label>
                <input type="number"></input>
                <label htmlFor="Location">Location":</label>
                <input type="text"></input>
                <label htmlFor="dName">Name:</label>
                <input type="text"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Facilities;