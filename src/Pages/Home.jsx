import React from 'react';
import Navbar from '../Componenets/Navbar';
import HeroSection from '../Componenets/HeroSection';
import Facts from '../Componenets/Facts';
import AllAppData from '../Hooks/AllAppData';

const Home = () => {
    const {allApp, loading, error} = AllAppData()
    return (
        <div>
            <HeroSection></HeroSection>
            
            <Facts></Facts>
        </div>
    );
};

export default Home;