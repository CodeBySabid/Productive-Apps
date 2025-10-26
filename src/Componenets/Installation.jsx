import React, { useEffect, useState } from 'react';
import img2 from '../assets/Assets/icon-ratings.png'
import { Download, Key, } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Installation = () => {
    const notify = () => toast("uninstall successfully!");
    const [installstion, setInstallation] = useState([]);
    const [SortBySize, setSortBySize] = useState("none");
    useEffect(() => {
        const installstionList = JSON.parse(localStorage.getItem('installstion'))
        if (installstionList) setInstallation(installstionList)
    }, [])
    const sortedApp = (() => {
        if (SortBySize === 'size-asc') {
            return [...installstion].sort((a, b) => a.downloads - b.downloads);
        }
        else if (SortBySize === 'size-desc') {
            return [...installstion].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return installstion;
        }
    }
    )()

    const handleRemove = (id) => {
        const existingApp = JSON.parse(localStorage.getItem('installstion'))
        let updataApp = existingApp.filter(A => A.id !== id);
        setInstallation(prev => prev.filter(A => A.id !== id));
        localStorage.setItem('installstion', JSON.stringify(updataApp))
    }
    return (
        <div className='p-20 max-sm:p-2 max-sm:pt-3.5 max-lg:p-5'>
            <div className='w-full text-center mb-7 max-sm:mb-2.5'>
                <h1 className='text-6xl max-xl:text-5xl max-md:text-4xl font-semibold mb-4 max-sm:mb-1 max-sm:text-[8vw]'>Your Installed Apps</h1>
                <p className='text-2xl max-xl:text-[20px] max-md:text-[15px] max-sm:text-[3vw] text-[#4a5763] '>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='w-full'>
                <div className='mb-5 max-sm:mb-1 w-full flex justify-between'>
                    <h1 className='text-2xl max-sm:text-[4vw] font-semibold'>{sortedApp.length} Apps Found</h1>
                    <select className='w-[20vw] border p-2 rounded max-lg:w-[25vw] max-md:w-[30vw] max-sm:w-[40%] max-sm:p-0 max-sm:text-[4vw]' value={SortBySize} onChange={e => setSortBySize(e.target.value)}>
                        <option value="none">Sort By Size</option>
                        <option value="size-asc">Low to High</option>
                        <option value="size-desc">High to Low</option>
                    </select>
                </div>
                <div className='w-full flex-col flex gap-4'>
                    {sortedApp.map(A => (
                        <div key={A.id} className='w-full p-4 max-sm:p-2 rounded-sm bg-[#FFFFFF] flex justify-between items-center'>
                            <div className='flex'>
                                <img className='rounded-xl w-[80px] max-md:w-[60px] max-md:h-[60px]' src={A.image} alt="" />
                                <div className='flex flex-col justify-between max-sm:justify-center max-sm:gap-1 ml-4 max-sm:ml-1 py-1 max-md:py-0'>
                                    <h1 className='text-3xl max-md:text-2xl max-sm:text-[4.5vw] font-semibol'>{A.title}</h1>
                                    <div className='flex gap-5 max-sm:gap-2'>
                                        <div className='flex items-center'>
                                            <h3 className='font-semibold flex items-center gap-2 max-sm:gap-1 text-xl max-md:text-[16px] max-sm:text-[3.5vw] text-[#00D390]'><Download size={25} className='inline w-[20px] max-md:w-[16px] max-sm:w-[3.5vw]' /> {A.downloads}</h3>
                                        </div>
                                        <div className='flex items-center gap-2 max-sm:gap-1'>
                                            <img className='w-[20px] max-md:w-[16px] max-sm:w-[3.5vw]' src={img2} alt="" />
                                            <h3 className='font-semibold text-xl max-md:text-[16px] max-sm:text-[3.5vw] text-[#FF8811]'> {A.ratingAvg}</h3>
                                        </div>
                                        <div className='flex items-center'>
                                            <h1 className='text-xl max-md:text-[16px] max-sm:text-[3.5vw]'>{A.size} MB</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() =>{ handleRemove(A.id); notify()}} className='btn max-sm:w-[26vw] bg-[#00D390] rounded text-white'>Uninstall</button>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    );
};

export default Installation;