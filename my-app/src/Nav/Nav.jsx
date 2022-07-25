import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return(

        <div className='navContainer'>
            <Link to='/Drivers'><h2>Drivers</h2></Link>
            <Link to='/Trucks'><h2>Trucks</h2></Link>
            <Link to='/Customers'><h2>Customers</h2></Link>
            <Link to='/Facilities'><h2>Facilities</h2></Link>
            <Link to='/Deliveries'><h2>Deliveries</h2></Link>
            <Link to='/Orders'><h2>Orders</h2></Link>
        </div>

    );
}

export default Nav;