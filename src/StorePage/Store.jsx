import { useState } from 'react'
import './Store.css'
import { motion } from 'framer-motion'

function Store() {
  const half = window.innerWidth/2;

  return (
    <motion.div
    className='bg-slate-600 w-screen h-[50vh]'
    initial={{ width: 0 }} 
    animate={{ width: "100vw" }} 
    exit={{ x: window.innerWidth, transition: {duration: 0.2}}}>

      <h1 className='text-4xl m-20'>Store</h1>
    </motion.div>
  )
}

export default Store
