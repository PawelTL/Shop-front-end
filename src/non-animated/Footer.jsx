import React from 'react'
import "./Footer.css"

function Footer() {


    return (
        <footer className='w-screen absolute bottom-0 left-0 bg-slate-50 shadow-[0_5px_9px_3px_black] h-[8vh] flex justify-between px-2 sm:px-16 items-center text-lg sm:text-2xl'>
           <a href='https://github.com/PawelTL' className='flex md:gap-2'><span>Made by PawelTL</span> <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' height="30px" width="30px"/></a>
           <h1>All Rights Reserved</h1>
        </footer>
    )
}

export default Footer