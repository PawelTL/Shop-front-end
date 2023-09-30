import React, { useContext, useState } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { CartContext } from './Routes'

function Card({ title, price, image, id, description }) {
    const { addToCart, products } = useContext(CartContext)

    return (

        <div className='card-wrapper w-[18vw] min-w-[250px] min-h-[300px] m-1 shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 h-[18vw] bg-white relative overflow-hidden rounded-xl'>
            <Link className='' to={`/store/${id}`} state={{ title, price, image, id, description }}>
                <img src={image} className='h-[50%] px-4 py-2 mx-auto' />

                <div className=' w-full h-[32%] bg-white pt-3 flex flex-col justify-between items-center text-center'>

                    <h1 className='w-full text-base font-semibold'>{title}</h1>
                    <h1 className='text-xl font-bold text-green-500 left-4 bottom-4'>{price}$</h1>
                </div>
            </Link>
            <button className='p-2 font-bold text-white bg-green-600 border-4 border-green-800 rounded-xl ml-[50%] -translate-x-[50%]' type='button' onClick={() => addToCart(products[id - 1])}>Add to cart</button>
        </div>

    )
}

export default Card