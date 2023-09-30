import { React } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './non-animated/Navbar.jsx'
import Footer from './non-animated/Footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from './AnimatedRoutes.jsx'
import { useState, useEffect, createContext, useContext } from 'react'

export const CartContext = createContext({
  addToCart: () => { },
  products: []
})

function Routes() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
  const [activeCart, setActiveCart] = useState(false);
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    let prices = 0;
    cart.map((product) => {
      prices += product.price * product.quantity;
    })
    setTotal(prices)
  }


  const addToCart = (state) => {
    if (!cart.find(p => p.id === state.id)) {
      setCart([...cart, state])
    }
    else {
      let target = cart.find(p => p.id === state.id)
      target.quantity = Number(target.quantity) + 1;
      updateTotal()
    }
  }

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
      <CartContext.Provider value={{addToCart: addToCart, products: products}}>
        <Navbar setActiveCart={setActiveCart} activeCart={activeCart} cart={cart} total={total} updateTotal={updateTotal} />
        <AnimatedRoutes products={products} setCart={setCart} cart={cart} loadProducts={loadProducts} updateTotal={updateTotal} total={total}/>
        <Footer />
      </CartContext.Provider>
    </Router>
  )
}

export default Routes
