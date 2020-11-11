import React, { Component } from 'react';


class HomePage extends Component {

    render() {
        return (
            <div className="flex text-gray-600">
                <div className="flex justify-self-center p-24 mx-12">
                    <div className="block p-6">
                        Personal Website of Matt Guttman.<br/>
                        I'm a software engineer, data analyst, philosopher, and teacher.<br/>
                        I'm especially interested in consciousness, ethics, machine learning, and other topics in AI.
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
