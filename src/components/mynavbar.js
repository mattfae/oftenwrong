import React, { Component } from 'react';


class MyNavbar extends Component {

    render() {
        return(
            <nav className="relative bg-grey">
                <div className="max-w-7x1 mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items--center">
                        <a href="/" className="flex">
                            Matt Guttman
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MyNavbar;
