import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {


    return (
        <nav className='h-[9vh] w-[100vw] bg-zinc-950 fixed top-0 left-0 flex justify-between items-center px-[5vw] text-2xl text-white font-semibold z-20'>
            <h1 className='text-3xl z-20'>StoreName</h1>
            <div className='flex justify-evenly w-[20vw]'>
                <Link to={"/"} className=''>Home</Link>
                <Link to={"/store"}>Store</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </nav>
    )
}

export default Navbar