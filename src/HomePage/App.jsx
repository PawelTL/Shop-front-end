import { useEffect, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import Card from '../Card'

function App({products}) {
    products.length = 4;

  return (
    <motion.div
      className='bg-slate-600 w-[screen] mt-[9vh] pb-[8vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <div className='relative w-full bg-no-repeat bg-cover'>
        <img src='https://as1.ftcdn.net/v2/jpg/04/52/38/26/1000_F_452382698_y6SU2xlHYBv1njIYUmSev5FYLduY8euD.jpg'  className='w-full p-0 m-0'/>
        <h1 className='welcome-text text-8xl font-bold absolute top-[40%] w-full text-center'>Welcome to StoreName</h1>
      </div>
      <h1 className='w-full m-10 text-5xl font-bold text-center text-white'>Featured items</h1>
      <div className='flex justify-evenly w-[60vw] mx-auto pb-4'>
        {products.length > 0 ?
          products.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>

    </motion.div>
  )
}

export default App
