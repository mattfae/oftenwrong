import React from 'react';
import { Link } from 'react-router-dom';

function PhilNav() {

    return (
        <div className="inline-block h-full w-1/6 z-8 shadow-inner">
            <div className="p-4">

                <div className="text-xl text-gray-700 hover:text-black">
                    <Link to="/philosophy">Philosophy Home</Link>
                </div>

                <div className="text-gray-600 hover:text-gray-700 m-2">
                    <ul>
                    <li className="m-1"/><Link to="philosophy/abstraction">Abstraction</Link>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default PhilNav;
