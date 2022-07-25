import React from "react";
import './customers.css';

function Customers () {
    return(
        <div className='customersContainer'>
            <form className='dForm' action="/">

                <label htmlFor="cName">Name:</label>
                <input
                    type="text"
                    id="cName"
                    name="dcName">
                </input>

                <label htmlFor="cEmail">Email:</label>
                <input
                    type="text"
                    id="cEmail"
                    name="dcEmail"> 
                </input>

                <input type="submit" value="Submit"></input>

            </form>
        </div>
    )
}

export default Customers;