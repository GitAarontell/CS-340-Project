import React from "react";
import './trucks.css';

function Trucks () {
    return(
        <div className='trucksContainer'>

            <form className='dForm' action="/">

                <label htmlFor="tCurrentFacilityID">Current Facility ID:</label>
                <input
                    type="text"
                    id="tCurrentFacilityID"
                    name="dtCurrentFacilityID">
                </input>

                <label htmlFor="tPlate">Plate Number:</label>
                <input
                    type="text"
                    id="tPlate"
                    name="dtPlate">
                </input>

                <label htmlFor="tMaxWeight">Max Weight:</label>
                <input
                    type="number"
                    id="tMaxWeight"
                    name="dtMaxWeight">
                </input>

                <label htmlFor="tMaxVolume">Max Volume:</label>
                <input
                    type="number"
                    id="tMaxVolume"
                    name="dtMaxVolume">
                </input>

                <input type="submit" value="Submit"></input>

            </form>
        </div>
    )
}

export default Trucks;