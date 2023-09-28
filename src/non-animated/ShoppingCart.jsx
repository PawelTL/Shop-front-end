import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from '../Card'
import { Link } from 'react-router-dom'
import CartCard from './CartCard';

function ShoppingCart({ activeCart, cart }) {
const [total, setTotal] = useState(0);

const updateTotal = () => {
    let prices  = 0;
    cart.map((product) => {
        prices += product.price * product.quantity;
        console.log(product.quantity)
    })
  setTotal(prices)

  useEffect(() => updateTotal(), [cart])
}

    return (
        <AnimatePresence mode='wait'>
            {activeCart && <motion.div key="ShoppingModal" className='h-[91vh] absolute right-0 top-[9vh] bg-black w-[15vw] border-l-4 border-white flex flex-col gap-2 items-center p-5 overflow-x-hidden' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} style={{ transformOrigin: "right" }}>
                {cart.length > 0 ? cart.map((product) => (
                        <CartCard product={product} updateTotal={updateTotal}/>
                )) : <h1 className='text-xl text-white'>The cart is empty</h1>}
                <h1>Total: {total.toFixed(2)}$</h1>
                <button type='button' className='w-[80%] relative my-5 bg-green-700 p-2 rounded-2xl border-4 border-green-950'>Checkout</button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default ShoppingCart