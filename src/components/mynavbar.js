import React, { Component } from 'react';
import TwitterLogo from '../assets/resources/twitter_logo.png';


class MyNavbar extends Component {

    render() {
        return(

            <div className="w-screen px-6 bg-white">
                <div className="flex items-center border-b-2 border-gray-200 py-4">
                    
                    <div className="flex-none">
                        <a href="/" className="text-3xl text-gray-700">
                            Matt Guttman
                        </a>
                    </div>
                    
                    <div className="flex w-full items-center justify-evenly px-6">
                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            Philosophy
                        </div>
                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            Software
                        </div>
                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            <a href="http://oftenwrong.substack.com" alt="Substack">
                                Newsletter
                            </a>
                        </div>
                        <div className="inline-block rounded-full m-1 hover:bg-blue-100 hover:shadow-sm">
                            <a href="http://www.twitter.com/realtimeai" className="">
                                <img className="h-10 w-10 " src={TwitterLogo} alt="Twitter Profile"/>
                            </a>
                        </div>
                    </div>

                </div>
            </div> 
        )
    }
}

export default MyNavbar;
