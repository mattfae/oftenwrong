import React from 'react';
import { Link } from 'react-router-dom';

function PhilHome() {

    return (
        <p>
            I'm collecting <span className="underline hover:text-blue-600"><Link to="/philosophy/interconnectedness">pieces</Link></span> of a coherent worldview.
        </p>
    );
}

export default PhilHome;
