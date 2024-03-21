import React, { useState } from 'react';
import Rooms from '../../Components/Rooms/Rooms';
import Category from '../../Components/Category/Category';

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOPEN]= useState(false)

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    // const OpenCategoryModal = () => {
    //     setIsCategoryModalOPEN(true);
    // };

    // const CloseCategoryModal = () => {
    //     setIsCategoryModalOPEN(false);
    // };

    return (
        <div>

        {/* Welcome section */}
            <div onClick={openModal} className='text-center my-1 btn btn-sm flex items-center justify-center w-3/12 mx-auto'>
                <button className='btn btn-ghost btn-sm font-bold  bg-gradient-to-r from-fuchsia-400  to-red-400 bg-clip-text text-transparent' >Hey</button>
            </div>
            {isModalOpen && (
                <div id='modal' className='fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center '>
                    <div className='bg-white p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm'>
                        <p className='text-red-400 font-bold text-lg'>Welcome to StayVista</p>
                        <div className='text-center my-5'>
                            <button className='btn btn-xs' onClick={closeModal}>Close </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Category section */}
{/* 
            <h1 onClick={OpenCategoryModal} className="text-2xl text-red-400 text-center bg-slate-500 mt-2 py-2">Categories</h1>
            {isCategoryModalOpen&& (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center '>
                    <div className='bg-white p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm'>
                        <h2>Hello Welcome to the Varities Category</h2>
                        <div className='text-center my-5'>
                            <button className='btn btn-xs' onClick={CloseCategoryModal}>Close </button>
                        </div>
                    </div>    
                </div>
            )} */}
            <Category></Category>
            
            {/* Room section */}
            <div className="  text-center  mt-2 py-2">
                <Rooms></Rooms>
            </div>
            
        </div>
    );
};

export default Home;
