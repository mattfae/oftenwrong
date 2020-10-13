import React, { Component } from 'react';



class Main extends Component {

    render() {
        return (
            <div className=" flex h-screen w-auto text-gray-600 bg-white">
                <div className="flex justify-self-center p-24 mx-12">
                    <div className="block p-6">
                    Hi, I'm Matt Guttman.  I'm unusually curious about the nature of existence.  I've done a lot of thinking about the enduring questions in philosphy.  I'll be writing some of my thoughts here.
                    <br></br>
                    <br></br>
                    I'm an epistemological fallibilist.  I believe knowledge develops through conjectures and criticism.  Part of making progress in any area is being <span className="hover:text-gray-800">often wrong</span>.
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;
