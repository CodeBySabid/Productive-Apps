import React from 'react';
import HeroSection from '../Componenets/HeroSection';
import Facts from '../Componenets/Facts';
import AllAppData from '../Hooks/AllAppData';
import Allapp from '../Componenets/Allapp';
import { NavLink } from 'react-router';

const Home = () => {
    const { allApp } = AllAppData();
    const Allapps = allApp.slice(1, 9);
    return (
        <div>
            <HeroSection></HeroSection>
            <Facts></Facts>
            <div className='w-full flex flex-col items-center my-6'>
                <h1 className='text-5xl mb-5 font-semibold max-sm:text-[7vw]'>Trending Apps</h1>
                <p className='text-xl text-[#627382] max-sm:text-[3vw] text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='2xl:w-[80%] xl:w-full py-5 px-5 max-xl:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        Allapps.map(allApp => (
                            <Allapp key={allApp.id} allApp={allApp}></Allapp>
                        ))
                    }
                </div>
                <NavLink to={'/mainapp'} className="btn border-none rounded py-7 px-9 text-white text-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">Show All</NavLink>
            </div>
        </div>
    );
};

export default Home;