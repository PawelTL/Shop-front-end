import { useState, useEffect } from 'react'
import './Store.css'
import { motion } from 'framer-motion'
import Card from '../Card';


function Store({ products, loadProducts }) {
 
  return (
    <motion.div
      className='w-screen bg-slate-100 mt-[9vh] pb-[9vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>

      <h1 className='px-16 py-3 text-5xl font-semibold'>Our Products</h1>
      <div className='flex flex-wrap justify-start w-full gap-6 px-10 pb-4'>
        {products.length > 0 ?
          products.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>
      




    </motion.div>
  )
}

export default Store
