import { React, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar({ setActiveCart, activeCart, cart, total, updateTotal }) {

    return (
        <nav className='h-[9vh] w-[100vw] bg-slate-50 shadow-lg fixed top-0 left-0 flex justify-center sm:justify-between items-center px-[5vw] text-2xl text-black font-semibold z-20'>
            <h1 className='z-20 hidden text-3xl sm:block'>StoreName</h1>
            <div className='flex justify-evenly w-[300px]'>
                <Link to={"/"} className='flex items-center'>Home</Link>
                <Link to={"/store"} className='flex items-center'>Store</Link>
                <Link to={"/about"} className='flex items-center'>About</Link>
                <div className='relative cursor-pointer' onClick={() => setActiveCart(!activeCart)}>
                <Link to={"/checkout"}><img  src='https://cdn-icons-png.flaticon.com/512/1413/1413908.png' className='w-12 p-0 m-0' /></Link>
                    {cart.length > 0 ? <span className='absolute top-[0%] right-[-10%] bg-red-600 w-[23px] h-[23px] text-white text-base border-2 border-black rounded-full flex justify-center items-center'>{cart.length}</span> : null}
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar