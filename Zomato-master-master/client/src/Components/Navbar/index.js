import React from 'react'
import { FaUser } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { MdLocationOn, MdArrowDropDown } from "react-icons/md";

const MobileNav = () => {
    return (
        <>
        <div className="flex items-center justify-between w-full lg:hidden">
            <div className="w-24 m-1">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flex items-center gap-3">
                <button className="bg-zomato-400 text-white text-xs font-semibold py-2 px-3 rounded-full">Use App</button>
                <span className="border p-2 text-lg border-gray-300 text-zomato-300 rounded-full">
                    <FaUser className="w-full h-full"/>
                </span>
            </div>
        </div>
        </>
    )
};

const DesktopNav = () => {
    return (
        <>
        <div className="flex items-center w-full">
            <div className="w-32 m-2 mr-4">
                <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full"
                />
            </div>
            <div className="flex items-center shadow-md p-3 px-1 rounded-lg mt-1 w-3/5">
                <div className="w-2/5 flex items-center justify-between border-r-2 px-1">
                    <div className="flex gap-1 text-gray-500">
                       <span className="h-6 w-6 text-zomato-300"><MdLocationOn className="w-full h-full" /></span>
                       <input type="text" placeholder="Bhubaneshwar" className="outline-none"/>
                    </div>
                    <div className="h-6 w-6 text-gray-600">
                        <MdArrowDropDown className="w-full h-full" />
                    </div>
                </div>
                <div className="w-3/5 flex items-center px-1 text-gray-500">
                    <span className="h-5 w-12 text-gray-400">
                        <RiSearchLine className="w-full h-full"/>
                    </span>
                    <input type="text" placeholder="Search for a restaurant, cuisine or a dish" className="outline-none w-full" />
                </div>
            </div>
            <div className="flex items-center mx-9 text-lg">
                <button className="text-gray-400 hover:text-gray-800 px-12">Login</button>
                <button className="text-gray-400 hover:text-gray-800 ">Sign Up</button>
            </div>
        </div>
        </>
    )
};

const Navbar = () => {
    return (
        <>
        <nav className="px-5 py-2 flex bg-white shadow-md items-center lg:hidden">
            <MobileNav />
        </nav>
        <nav className="mx-20 px-3 py-2 bg-white hidden md:hidden lg:flex">
            <DesktopNav />
        </nav>
        </>
    )
};

export default Navbar;
