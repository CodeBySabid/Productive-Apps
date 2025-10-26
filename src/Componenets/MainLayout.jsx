import Footer from './Footer';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const MainLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);
        return() => clearTimeout(timer);
    }, [location.pathname]);
    return (
        <div className='bg-[#D2D2D2] min-h-screen relative'>
            <Navbar />
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                    <LoadingSpinner />
                </div>
            )}
            <div className={`${loading ? 'opacity-50 pointer-events-none' : ''}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;