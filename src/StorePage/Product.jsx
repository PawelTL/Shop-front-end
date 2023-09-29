import { React, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion';


function Product({ setCart, products, cart, updateTotal }) {
    const { state } = useLocation();

    const addToCart = (state) => {
        if (!cart.find(p => p.id === state.id)) {
            setCart([...cart, state])
        }
        else {let target = cart.find(p => p.id === state.id)
             target.quantity = Number(target.quantity) + 1;
             updateTotal()
        }
    }

    return (
        <motion.div
            className='bg-white w-[screen] mt-[9vh] pb-[8vh] h-[91vh] flex justify-evenly items-center'
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <img src={state.image} className="w-[25%]" />
            <div className='w-[40%] p-5'>
                <div className="pb-6 border-b-2 border-gray-500">
                    <h1 className='text-2xl font-semibold'>{state.title}</h1>
                    <h2 className='text-2xl font-bold text-green-500'>{state.price}$</h2>
                </div>
                <p className='py-6'>{state.description}</p>
                <button type='button' onClick={() => addToCart(products[state.id - 1])} className='w-[10vw] h-[4vw] rounded-2xl border-4 border-black bg-white font-bold text-xl'>Add to cart</button>

            </div>
        </motion.div>
    )
}

export default Product