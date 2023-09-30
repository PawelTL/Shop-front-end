import { useState } from 'react'
import './About.css'
import { motion } from 'framer-motion'

function About() {
    const [count, setCount] = useState(0)

    return (
        <motion.div
        className='bg-white w-screen mt-[9vh] flex flex-col items-center justify-center text-center gap-10 text-2xl md:text-5xl font-semibold h-[91vh] pb-[7vh] px-3'
        initial={{ width: 0 }} 
        animate={{ width: "100vw" }} 
        exit={{ x: window.innerWidth, transition: {duration: 0.1}}}>
          <h1>Welcome to StoreName</h1>
          <h2>This is a fictional store, and none of the products actually exist.</h2>
          <h2>The Products were taken from the Fake Store API</h2>
        </motion.div>
    )
}

export default About
