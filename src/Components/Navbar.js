import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='navBox'>
            <ul className='navList'>
                <li><Link to="/">About</Link></li>
                <li><Link to="search">Search</Link></li>
                <li><Link to="analyze">Analytics</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;