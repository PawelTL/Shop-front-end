import { useState } from 'react'
import './About.css'
import { motion } from 'framer-motion'

function About() {
    const [count, setCount] = useState(0)

    return (
        <motion.div
        className='bg-slate-600 w-screen h-[50vh]'
        initial={{ width: 0 }} 
        animate={{ width: "100vw" }} 
        exit={{ x: window.innerWidth, transition: {duration: 0.1}}}>
    
          <h1 className='text-4xl m-20'>About</h1>
        </motion.div>
    )
}

export default About
