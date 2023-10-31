import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage'
import { LoginPage } from '../pages/loginPage'
import { SignUpPage } from '../pages/signUpPage'
import Test from '../pages/test'

const PublicRoutes = () => {
    return (
        // <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/test" element={<Test />} />


        </Routes>
        // </Router>
    )
}

export default PublicRoutes