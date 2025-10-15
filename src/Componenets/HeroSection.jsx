import React from 'react';
import { NavLink } from 'react-router';
import GooglePlay from '../assets/Assets/fi_16076057.png'
import AppStore from '../assets/Assets/fi_5977575.png'
import Heroimg from '../assets/Assets/hero.png'

const HeroSection = () => {
    return (
        <div className='flex max-lg:w-full flex-col items-center mt-9'>
            <div className=' text-center flex flex-col items-center max-lg:w-full px-3 w-4xl'>
                <h1 className='max-sm:text-4xl font-semibold max-lg:text-6xl max-md:text-5xl text-7xl'>We Build</h1>
                <h1 className='max-sm:text-4xl font-semibold max-lg:text-6xl max-md:text-5xl text-7xl '><span className='bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='text-[#627382]  max-lg:text-lg max-md:text-base text-xl max-sm:text-sm max-md:py-5 py-8'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center gap-12 max-lg:gap-6 max-lg:w-full mb-8'>
                    <NavLink to={'https://play.google.com/store/games?hl=en'} className='max-md:w-[40%] max-sm:p-0.5 flex items-center border border-gray-400 rounded justify-center w-[200px] h-[55px] max-sm:h-[45px] max-[354px]:text-[80%]'>
                        <span><img className='inline mr-3 max-sm:m-0.5' src={GooglePlay} alt="GooglePlay icon" /> Google Play</span>
                    </NavLink>
                    <NavLink to={'https://www.apple.com/app-store/'} className='max-md:w-[40%] max-sm:p-0.5 flex items-center border border-gray-400 rounded justify-center w-[200px] h-[55px] max-sm:h-[45px]'>
                        <span><img className='inline mr-3 max-sm:m-0.5' src={AppStore} alt="GooglePlay icon" /> App Store</span>
                    </NavLink>
                </div>
                <img className='w-[90%]' src={Heroimg} alt="Heroimg" />
            </div>
        </div>
    );
};

export default HeroSection;