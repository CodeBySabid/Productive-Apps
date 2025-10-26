import React from 'react';
import img from '../assets/Assets/App-Error.png'
import { NavLink } from 'react-router';

const ErrorPageApp = () => {
    return (
        <div>
            {/* <div className='h-[72.2vh]'>{error.message}</div> */}
            <div className='w-full bg-[#D2D2D2] py-10 max-sm:py-4 flex flex-col justify-center items-center'>
                <img className='h-[40vh] max-lg:w-[30vw] max-lg:h-auto' src={img} alt="" />
                <h1 className='text-[4vw] font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[1.6vw] text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <NavLink to={'/mainapp'} className='rounded py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-6 max-sm:mt-2 border-none px-9 text-white text-xl max-lg:text-sm max-lg:px-4 max-lg:py-2 max-sm:py-1 max-sm:text-[2vw] '>Go Back!</NavLink>
            </div>
        </div>
    );
};

export default ErrorPageApp;