import { Search } from 'lucide-react';
import React, { useState } from 'react';
import AllAppData from '../Hooks/AllAppData';
import Allapp from './Allapp';

const MainAllApps = () => {
    const { allApp } = AllAppData();
    const [search, setsearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedApp = term ? allApp.filter(allApps => allApps.title.toLocaleLowerCase().includes(term)) : allApp;
    const handleShowApp = () => {
        setsearch('')
    }
    return (
        <div className=''>
            <div className='flex items-center flex-col max-md:pt-5 p-20 max-lg:px-2 max-lg:py-10'>
                <h1 className='text-[3.5vw] max-md:text-[6vw] font-semibold'>Our All Applications</h1>
                <p className='text-[1.2vw] max-md:text-[2.5vw] text-[#627382] pb-15 max-xl:pb-[2vh]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='w-full flex flex-col items-center'>
                    <div className='w-full max-sm:flex-col items-center max-sm:gap-5 max-sm:items-start flex justify-between max-lg:px-4 pb-2'>
                        <h1 className='font-semibold text-[2vw] max-lg:text-[4vw] max-sm:text-[6vw]'>({searchedApp.length}) Apps Found</h1>
                        <label className='h-11 max-xl:h-9 max-sm:w-full input border-2 border-gray-400'>
                            <input value={search} onChange={e => setsearch(e.target.value)} type='search' className='text-[#627382] max-xl:w-full max-sm:w-full w-[20vw]' name="" placeholder='search Apps' id="" />
                        </label>
                    </div>
                    {searchedApp.length === 0 ? (
                        <div className='text-center mt-10'>
                            <h2 className='text-2xl font-semibold text-gray-500'>
                                No App Found
                            </h2>
                            <button
                                onClick={handleShowApp}
                                className='bg-blue-500 btn text-white px-4 py-2 rounded mt-4'
                            >
                                Show All Apps
                            </button>
                        </div>
                    ) : (
                        <div className='2xl:w-[80%] max-md:max-w-[500px] max-[639px]:max-w-[400px]  xl:w-full justify-center items-center py-5 px-5 max-xl:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {
                                searchedApp.map(allApp => (
                                    <Allapp key={allApp.id} allApp={allApp}></Allapp>
                                ))
                            }
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default MainAllApps;