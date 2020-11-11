import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TwitterLogo from '../assets/resources/twitter_logo.png';


class HomeNav extends Component {

    render() {
        return (

            <div className="w-full relative px-6 z-10 bg-white shadow-md">
                <div className="flex items-center py-4">

                    <div className="flex-none text-3xl text-gray-700 hover:text-black">
                            <Link to="/" >
                                Often Wrong
                            </Link>
                    </div>

                    <div className="flex w-full items-center justify-evenly px-6">

                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            < Link to="/philosophy" >
                                Philosophy
                            </Link>
                        </div>

                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            <a href="https://friends-of-app.heroku.com" alt="Software">
                                Software
                            </a>
                        </div>

                        <div className="inline-block text-gray-600 hover:text-gray-700 m-1">
                            <a href="http://oftenwrong.substack.com" alt="Substack">
                                Newsletter
                            </a>
                        </div>

                        <div className="inline-block rounded-full m-1 hover:shadow">
                            <a href="http://www.twitter.com/realtimeai" className="">
                                <img className="h-10 w-10 " src={TwitterLogo} alt="Twitter"/>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default HomeNav;
