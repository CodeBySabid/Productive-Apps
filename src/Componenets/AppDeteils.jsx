import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import AllAppData from '../Hooks/AllAppData';
import img1 from '../assets/Assets/icon-downloads.png'
import img2 from '../assets/Assets/icon-ratings.png'
import img3 from '../assets/Assets/icon-review.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDeteils = () => {
    const { id } = useParams();
    const { allApp, loading } = AllAppData();
    const app = allApp.find(p => String(p.id) === id)
    const [isInstalled, setIsInstalled] = useState(false);
    useEffect(() => {
        const existingApp = JSON.parse(localStorage.getItem('installstion')) || [];
        const alreadyInstalled = existingApp.some(p => p.id === app?.id);
        setIsInstalled(alreadyInstalled);
    }, [app]);
    if (loading) return <p>Loading....</p>
    const { image, companyName, downloads, ratingAvg, reviews, size, ratings, description1, description2, description3 } = app || {}
    const maxValue = Math.max(...ratings.map(r => r.count));
    const InstallApp = () => {
        const existingApp = JSON.parse(localStorage.getItem('installstion'))
        let updataApp = []
        if (existingApp) {
            const isDuplicate = existingApp.some(p => p.id === app.id)
            if (isDuplicate) {
                return;
            }
            updataApp = [...existingApp, app]
        }
        else {
            updataApp.push(app);
        }
        localStorage.setItem('installstion', JSON.stringify(updataApp))
        setIsInstalled(true);
        toast.success('App installed successfully!');
    }
    return (
        <div className='w-full p-20 max-sm:px-3 max-sm:py-8 flex justify-center'>
            <div className='w-full'>
                <div className='w-full'>
                    <div className='max-w-[1600px] flex justify-center w-full gap-8 max-sm:flex-col max-sm:items-center'>
                        <img className='rounded w-[350px] h-[350px] max-lg:w-[270px] max-lg:h-[270px] max-sm:w-full max-sm:h-auto max-sm:max-w-[400px]' src={image} alt="" />
                        <div className='flex flex-col w-full max-sm:items-center'>
                            <h1 className='text-5xl max-sm:text-[8vw] max-lg:text-4xl font-semibold'>{app.title}</h1>
                            <h3 className='pb-4 pt-3 text-xl  text-gray-600 max-lg:text-sm max-lg:py-2'>Developed by <span className='font-semibold bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] inline-block text-transparent bg-clip-text'>{companyName}</span></h3>
                            <hr className='w-full text-gray-500' />
                            <div className='max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center'>
                                <div className='max-sm:w-full flex max-sm:justify-between gap-16 pt-5 mb-8 max-lg:mb-5 max-lg:pt-3 max-lg:gap-8 max-sm:gap-0'>
                                    <div className='flex max-sm:w-[33%] max-sm:items-center flex-col gap-1'>
                                        <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img1} alt="icon-downloads" />
                                        <h1 className='max-lg:text-sm'>Downloads</h1>
                                        <h1 className='font-bold text-4xl max-lg:text-3xl'>{downloads}M</h1>
                                    </div>
                                    <div className='flex max-sm:w-[33%] max-sm:items-center flex-col gap-1'>
                                        <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img2} alt="icon-ratings" />
                                        <h1 className='max-lg:text-sm'>Ratings</h1>
                                        <h1 className='font-bold text-4xl max-lg:text-3xl'>{ratingAvg}</h1>
                                    </div>
                                    <div className='flex max-sm:w-[33%] max-sm:items-center flex-col gap-1'>
                                        <img className='h-[40px] w-[40px] max-lg:w-[30px] max-lg:h-[30px] max-sm:w-[40px] max-sm:h-[40px]' src={img3} alt="icon-review" />
                                        <h1 className='max-lg:text-sm'>Review</h1>
                                        <h1 className='font-bold text-4xl max-lg:text-3xl'>{reviews}K</h1>
                                    </div>
                                    <div>
                                        <h1>{ }</h1>
                                    </div>
                                </div>
                                <button onClick={InstallApp} className='btn border-none px-3 py-2 max-sm:max-w-3xl text-center text-white bg-[#00D390] rounded text-2xl max-lg:text-xl'> {isInstalled ? 'Installed' : `Install Now (${size} MB)`} </button>
                            </div>
                        </div>
                    </div>
                    <hr className='w-full mt-8 text-gray-500' />
                </div>
                <div className='w-[90%] max-w-[1200px] my-10 mx-auto max-sm:w-[95%] max-sm:my-4'>
                    <h2 className='text-3xl font-semibold mb-8'>Ratings</h2>
                    {ratings.map(r => (
                        <div key={r.name} className="flex items-center my-4 mx-0 max-sm:flex-col max-sm:items-start">
                            <span className="w-[80px] text-xl font-semibold max-sm:w-auto">{r.name}</span>
                            <div className="flex-1 w-full bg-white h-7 mt-4 overflow-hidden relative">
                                <div
                                    className="h-full bg-orange-400 max-sm:w-full max-sm:h-[25px]"
                                    style={{ width: `${(r.count / maxValue) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between ml-20 font-semibold text-[#666]  mt-2.5 max-sm:ml-0 max-sm:text-[4vw]">
                        {[0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue].map((v) => (
                            <span key={v}>{Math.round(v)}</span>
                        ))}
                    </div>
                </div>
                <hr className='w-full text-gray-500 mb-6' />
                <div>
                    <h1 className='text-4xl font-semibold'>Description</h1>
                    <div>
                        <h2 className='mt-4 text-[#627382] min-sm:text-[16px]'>{description1}</h2>
                        <h2 className='mt-4 text-[#627382] min-sm:text-[16px]'>{description2}</h2>
                        <h2 className='mt-4 text-[#627382] min-sm:text-[16px]'>{description3}</h2>
                    </div>
                </div>
            </div>
            <ToastContainer position='top-right' autoClose={2000} />
        </div>
    );
};

export default AppDeteils;