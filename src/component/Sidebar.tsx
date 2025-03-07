// import React from 'react';
import {Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <>
            <div className="flex ">

                <div className="bg-blue-100 text-green-600 w-[200px] h-screen py-16 text-center font-bold font-">
                    <ul className="space-y-4">
                        <li>
                            <Link to="/home" className="text-xl font-bold hover:text-green-800">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-xl font-bold hover:text-green-800">About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-xl font-bold hover:text-green-800">Services</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar