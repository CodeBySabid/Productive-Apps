import React from 'react';
import { Link, useParams } from 'react-router';
import AllAppData from '../Hooks/AllAppData';
import img1 from '../assets/Assets/icon-downloads.png'
import img2 from '../assets/Assets/icon-ratings.png'
import img3 from '../assets/Assets/icon-review.png'
const AppDeteils = () => {
    const { id } = useParams();
    const { allApp, loading } = AllAppData();
    const app = allApp.find(p => String(p.id) === id)
    if (loading) return <p>Loading....</p>
    const InstallApp = () => {
        localStorage.setItem('tabuli', JSON.stringify(app))
    }
    return (
        <div className='w-full flex justify-center p-20 max-sm:p-2'>
            <div className='max-w-[1600px] flex justify-end w-full gap-8 max-sm:flex-col max-sm:items-center'>
                <img className='rounded w-[350px] h-[350px] max-lg:w-[270px] max-lg:h-[270px] max-sm:w-full max-sm:h-auto max-sm:max-w-[400px]' src={app.image} alt="" />
                <div className='flex flex-col w-full max-sm:items-center'>
                    <h1 className='text-5xl max-sm:text-[8vw] max-lg:text-4xl font-semibold'>{app.title}</h1>
                    <h3 className='pb-4 pt-3 text-xl  text-gray-600 max-lg:text-sm max-lg:py-2'>Developed by <span className='font-semibold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>{app.companyName}</span></h3>
                    <hr className='w-full text-gray-500' />
                    <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
                        <div className='flex gap-16 pt-5 mb-8 max-lg:mb-5 max-lg:pt-3 max-lg:gap-8 max-sm:gap-[12vw]'>
                            <div className='flex flex-col gap-1'>
                                <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img1} alt="icon-downloads" />
                                <h1 className='max-lg:text-sm'>Downloads</h1>
                                <h1 className='font-bold text-4xl max-lg:text-3xl'>{app.downloads}</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img2} alt="icon-ratings" />
                                <h1 className='max-lg:text-sm'>Ratings</h1>
                                <h1 className='font-bold text-4xl max-lg:text-3xl'>{app.ratingAvg}</h1>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img3} alt="icon-review" />
                                <h1 className='max-lg:text-sm'>Review</h1>
                                <h1 className='font-bold text-4xl max-lg:text-3xl'>{app.reviews}</h1>
                            </div>
                        </div>
                        <button onClick={InstallApp} className='px-3 py-2 max-sm:max-w-3xl text-center text-white bg-[#00D390] rounded text-2xl max-lg:text-xl'>Install Now ({app.size})</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDeteils;