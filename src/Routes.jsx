import { React } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './non-animated/Navbar.jsx'
import Footer from './non-animated/Footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from './AnimatedRoutes.jsx'
import { useState, useEffect } from 'react'

function Routes() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [activeCart, setActiveCart] = useState(false);
    
    

    const loadProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      data.map((product) => {
        product.quantity = 1;
      })
      setProducts(data);
    }
    useEffect(() => {
      loadProducts();
    }, [])


    return (
        <Router>
            <Navbar setActiveCart={setActiveCart} activeCart={activeCart} cart={cart}/>
            <AnimatedRoutes products={products} setCart={setCart} cart={cart}/>
            <Footer />
        </Router>
    )
}

export default Routes
