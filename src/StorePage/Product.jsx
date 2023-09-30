import { React, useState, useContext } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'; 
import { CartContext } from '../Routes';


function Product({ setCart, products, cart, updateTotal }) {
    const { state } = useLocation();
    const { addToCart } = useContext(CartContext);


    return (
        <motion.div
            className='bg-white w-[screen] mt-[9vh] pb-[8vh] md:h-[91vh] flex justify-evenly items-center flex-col md:flex-row'
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <img src={state.image} className="w-[80%] md:w-[25%]" />
            <div className='md:w-[40%] p-5 flex flex-col items-center'>
                <div className="pb-6 border-b-2 border-gray-500">
                    <h1 className='text-2xl font-semibold'>{state.title}</h1>
                    <h2 className='text-2xl font-bold text-green-500'>{state.price}$</h2>
                </div>
                <p className='py-6'>{state.description}</p>
                <button type='button' onClick={() => addToCart(products[state.id - 1])} className=' min-w-[200px] min-h-[80px] w-[10vw] h-[4vw] rounded-2xl border-4 border-black bg-white font-bold text-xl'>Add to cart</button>

            </div>
        </motion.div>
    )
}

export default Product