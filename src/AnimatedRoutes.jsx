import React from 'react'
import {useLocation, Route, Routes } from 'react-router-dom'
import App from './HomePage/App.jsx'
import Store from './StorePage/Store.jsx'
import About from './AboutPage/About.jsx'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
    
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    )

}
export default AnimatedRoutes