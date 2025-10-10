import React from 'react';
import AllAppData from '../Hooks/AllAppData';



const Facts = () => {
        const {Facts} = AllAppData();
        // console.log(data)
    return (
        <div className='p-20 w-full bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] h-[400px]'>
            {/* <h1 className='text-white'>{Facts.length}</h1> */}
        </div>
    );
};

export default Facts;