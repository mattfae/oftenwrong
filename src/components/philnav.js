import React from 'react';
import { Link } from 'react-router-dom';

function PhilNav() {

    return (
        <div className="inline-block h-full w-1/6 z-8 pt-4 bg-red-100">
            <Link to="/philosophy">Home</Link>
            <br/>
            <Link to="philosophy/abstraction">Abstraction</Link>
        </div>
    );
}

export default PhilNav;
