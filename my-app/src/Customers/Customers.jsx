import React from "react";
import './customers.css';

function Customers () {
    return(
        <div className='customersContainer'>
            <form className='dForm' action="/">
                <label htmlFor="dName">Name:</label>
                <input type="text" id="dName" name="dName"/>
                <label htmlFor="dEmail">Email:</label>
                <input type="text"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Customers;