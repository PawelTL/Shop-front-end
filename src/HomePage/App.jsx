import { useEffect, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import Card from '../Card'

function App({products}) {
    const prods = [...products];
    prods.length = 3;
  return (
    <motion.div
      className='bg-slate-100 w-[screen] mt-[9vh] pb-[8vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
      <div className='relative w-full bg-no-repeat bg-cover'>
        <img src='https://as1.ftcdn.net/v2/jpg/04/52/38/26/1000_F_452382698_y6SU2xlHYBv1njIYUmSev5FYLduY8euD.jpg'  className='w-full p-0 m-0'/>
        <h1 className='text-zinc-900  text-4xl sm:text-5xl md:text-8xl font-bold absolute top-[15vw] w-full text-center'>Welcome to StoreName</h1>
      </div>
      <h1 className='gap-3 m-10 text-4xl font-bold text-center sm:text-5xl'>Featured items</h1>
      <div className='flex justify-evenly items-center w-[60vw] mx-auto pb-4 flex-col md:flex-row'>
        {prods.length > 0 ?
          prods.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>

    </motion.div>
  )
}

export default App
