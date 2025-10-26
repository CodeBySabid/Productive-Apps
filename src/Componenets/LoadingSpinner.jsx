import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex flex-col items-center justify-center h-32'>
            <div className='w-10 h-10 border-4 border-[#ddd] border-t-4 border-t-[#3498db] rounded-[50%] animate-spin'></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingSpinner;