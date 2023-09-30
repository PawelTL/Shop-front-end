import React from 'react'
import { motion } from 'framer-motion'
import CheckoutCard from './CheckoutCard'

function Checkout({ cart, updateTotal, total }) {

    return (
        <motion.div
            className='bg-slate-100 w-[screen] mt-[9vh] pb-[8vh] p-3 min-h-[91vh] flex md:flex-row flex-col gap-6'
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <div className='flex flex-col gap-3 w-auto md:h-[81vh] overflow-y-scroll md:w-[70%]'>
                {
                    cart.map((product) => { return <CheckoutCard cart={cart} updateTotal={updateTotal} product={product} key={product.id} /> })
                }
            </div>
            <div className='flex flex-col items-center justify-center mx-auto'>
                <h1 className='p-5 text-4xl font-bold text-center text-green-700 md:text-5xl xl:text-7xl'>Total: ${Number(total).toFixed(2)}</h1>
                <button onClick={() => alert(`Purchase Confirmed for $${Number(total).toFixed(2)}`)} className='p-5 mb-5 text-3xl bg-blue-500 border-4 border-blue-700 md:mb-0 rounded-2xl'>Confirm Purchase</button>
            </div>

        </motion.div>
    )

}
export default Checkout