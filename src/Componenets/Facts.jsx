import React, { useEffect, useState } from 'react';
import AllAppData from '../Hooks/AllAppData';
import Allapp from './Allapp';
const Facts = () => {
    const [data, setApiData] = useState([]);
    useEffect(() => {
        fetch('./AppDetails.json')
            .then(response => response.json())
            .then(jsonData => setApiData(jsonData))
    }, []);
    return (
        <div>
            {
                data.map(data => (
                    <div key={data.id} className=' max-md:gap-9 py-20 justify-between w-full flex flex-col items-center bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] h-[400px] max-lg:h-[350px] max-lg:py-15  max-md:h-auto'>
                        <h1 className='text-5xl max-lg:text-[5vw]  font-semibold text-white'>{data.title}</h1>
                        <div className=' max-md:flex-col  max-md:gap-7 max-lg:w-[80%] flex max-lg:justify-between max-lg:gap-0 gap-30  '>
                            <div className='flex flex-col gap-1  max-md:gap-0 text-center'>
                                <p className='text-white text-xl max-lg:text-lg'>{data.name1}</p>
                                <h1 className='text-7xl  max-md:text-7xl max-lg:text-6xl max-sm:text-[14vw] font-semibold text-white'>{data.value1}</h1>
                                <p className='text-white text-xl max-lg:text-lg'>{data.change1}</p>
                            </div>
                            <div className='flex flex-col gap-1  max-md:gap-0 text-center'>
                                <p className='text-white text-xl max-lg:text-lg'>{data.name2}</p>
                                <h1 className='text-7xl  max-md:text-7xl max-lg:text-6xl max-sm:text-[14vw] font-semibold text-white'>{data.value2}</h1>
                                <p className='text-white text-xl max-lg:text-lg'>{data.change2}</p>
                            </div>
                            <div className='flex flex-col gap-1  max-md:gap-0 text-center'>
                                <p className='text-white text-xl max-lg:text-lg'>{data.name3}</p>
                                <h1 className='text-7xl  max-md:text-7xl max-lg:text-6xl max-sm:text-[14vw] font-semibold text-white'>{data.value3}</h1>
                                <p className='text-white text-xl max-lg:text-lg'>{data.change3}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Facts;