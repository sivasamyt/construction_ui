import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from './privateRoutes';
import PublicRoutes from './publicRoutes';
import { Header } from '../components/header';


const RootRoutes = () => {

    const token = "";

    return (
        <BrowserRouter>
            <Header />
            {token && <PrivateRoutes />}
            <PublicRoutes />
        </BrowserRouter>
    )
}

export default RootRoutes