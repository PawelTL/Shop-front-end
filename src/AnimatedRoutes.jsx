import React from 'react'
import {useLocation, Route, Routes } from 'react-router-dom'
import App from './HomePage/App.jsx'
import Store from './StorePage/Store.jsx'
import About from './AboutPage/About.jsx'
import Product from './StorePage/Product.jsx'
import { AnimatePresence } from 'framer-motion'
import Checkout from './CheckoutPage/Checkout.jsx'

function AnimatedRoutes({products, setCart, cart, loadProducts, updateTotal, total}) {
    const location = useLocation();
    
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<App  products={products}/>}/>
                <Route path="/store" element={<Store products={products} loadProducts={loadProducts}/>} />
                <Route path="/about" element={<About />} />
                <Route path='/store/:id' element={<Product setCart={setCart} products={products} cart={cart} updateTotal={updateTotal}/>}/>
                <Route path='/checkout' element={<Checkout cart={cart} updateTotal={updateTotal} total={total}/>} />
            </Routes>
        </AnimatePresence>
    )

}
export default AnimatedRoutes