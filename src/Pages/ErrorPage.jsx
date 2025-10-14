import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Componenets/Navbar';
import Footer from '../Componenets/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <Navbar></Navbar>
            <div>{error.message}</div>
            <Footer></Footer>
        </>
    )
};

export default ErrorPage;