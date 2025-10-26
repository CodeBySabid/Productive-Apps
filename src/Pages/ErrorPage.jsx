import React from 'react';
import img from '../assets/Assets/error-404.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='w-full bg-[#D2D2D2] py-10 max-sm:py-4 flex flex-col justify-center items-center'>
                <img className='h-[40vh] max-lg:w-[30vw] max-lg:h-auto' src={img} alt="" />
                <h1 className='text-[4vw] font-semibold'>Oops, page not found!</h1>
                <p className='text-[1.6vw] text-[#627382]'>The page you are looking for is not available.</p>
                <NavLink to={'/'} className='rounded py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-6 max-sm:mt-2 border-none px-9 text-white text-xl max-lg:text-sm max-lg:px-4 max-lg:py-2 max-sm:py-1 max-sm:text-[2vw] '>Go Back!</NavLink>
            </div>
        </div>
    )
};

export default ErrorPage;