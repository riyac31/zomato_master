import React from 'react';

//Components
import Navbar from "../Components/Navbar/index";
import FoodTab from "../Components/FoodTab/index";

const HomeLayout = (props) => {
    return (
        <>
        <div className="container mx-auto lg:px-28">
        <Navbar />
         {props.children}
        </div>
        <FoodTab />
        </>
    )
};

export default HomeLayout;
