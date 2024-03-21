import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className= ' bg-slate-300 pt-2 min-h-[calc(100vh-158px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Mainlayout;