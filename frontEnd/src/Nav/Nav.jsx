import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    // text decoration styles gets rid of the underline in 
    return(

        <div className='navContainer'>
            <Link classname='link'
            to='/Drivers'
            style={{ textDecoration: 'none' }}>
                <h2>Drivers</h2>
            </Link>

            <Link
            to='/Trucks'
            style={{ textDecoration: 'none' }}>
                <h2>Trucks</h2>
            </Link>
            
            <Link
            to='/Customers'
            style={{ textDecoration: 'none' }}>
                <h2>Customers</h2>
            </Link>

            <Link
            to='/Facilities'
            style={{ textDecoration: 'none' }}>
                <h2>Facilities</h2>
            </Link>

            <Link
            to='/Deliveries'
            style={{ textDecoration: 'none' }}>
                <h2>Deliveries</h2>
            </Link>

            <Link
            to='/Orders'
            style={{ textDecoration: 'none' }}>
                <h2>Orders</h2>
            </Link>
        </div>

    );
}

export default Nav;