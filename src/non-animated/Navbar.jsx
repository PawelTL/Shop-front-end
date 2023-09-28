import {React, useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart';

function Navbar({setActiveCart, activeCart, cart}) {

    return (
        <nav className='h-[9vh] w-[100vw] bg-zinc-950 fixed top-0 left-0 flex justify-between items-center px-[5vw] text-2xl text-white font-semibold z-20'>
            <h1 className='z-20 text-3xl'>StoreName</h1>
            <div className='flex justify-evenly w-[20vw]'>
                <Link to={"/"} className='flex items-center'>Home</Link>
                <Link to={"/store"} className='flex items-center'>Store</Link>
                <Link to={"/about"} className='flex items-center'>About</Link>
                <img onClick={() => setActiveCart(!activeCart)} src='https://pngimg.com/d/shopping_cart_PNG64.png' className='w-12 p-0 m-0 cursor-pointer'/>
            </div>
            <ShoppingCart activeCart={activeCart} cart={cart}/>
        </nav>
    )
}

export default Navbar