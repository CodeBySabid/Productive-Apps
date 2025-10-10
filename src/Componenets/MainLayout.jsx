import Footer from './Footer';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className='bg-[#D2D2D2]'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;