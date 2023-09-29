import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CartCard from './CartCard';

function ShoppingCart({ activeCart, cart, total, updateTotal }) {


useEffect(() => updateTotal(), [cart])

    return (
        <AnimatePresence mode='wait'>
            {activeCart && <motion.div key="ShoppingModal" className='h-[91vh] absolute right-0 top-[9vh] bg-slate-100 w-[15vw] border-l-4 border-black flex flex-col gap-2 items-center p-5 overflow-x-hidden overflow-y-auto' initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ scaleX: 0 }} style={{ transformOrigin: "right" }}>
                {cart.length > 0 ? cart.map((product) => (
                        <CartCard product={product} updateTotal={updateTotal} cart={cart}/>
                )) : <h1 className='text-2xl '>The cart is empty</h1>}
                <h1>Total: ${total.toFixed(2)}</h1>
                <button type='button' className='w-[80%] relative my-5 bg-green-700 p-2 rounded-2xl border-4 border-green-950'>Checkout</button>
            </motion.div>}
        </AnimatePresence>
    )
}

export default ShoppingCart