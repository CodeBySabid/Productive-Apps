import { Download, Star } from 'lucide-react';
import React from 'react';

const Allapp = ({allApp}) => {
    const {title, ratingAvg, downloads, image} = allApp
    return (
        <div className='flex flex-col items-center shadow-sm hover:scale-105 transition ease-in-out p-4 card rounded bg-white'>
            <div className='flex flex-col w-full gap-3'>
                <img className='rounded w-full object-cover' src={image} alt="" />
                <p className='text-2xl'>{title}</p>
                <div className='flex justify-between'>
                    <p className='flex gap-2 font-bold text-[#00D390] items-center bg-gray-200 px-5 py-2 rounded-sm '><Download />  {downloads}</p>
                    <p className='flex gap-2 font-bold text-[#FF8811] items-center bg-gray-200 px-5 py-2 rounded-sm '><Star /> {ratingAvg}</p>
                </div>
            </div>
        </div>
    );
};

export default Allapp;