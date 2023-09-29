import React, { useContext } from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import { CartContext } from './Routes'

function Card({ title, price, image, id, description}) {
    const { addToCart, products} = useContext(CartContext)

    return (
       
            <div className='card-wrapper w-[18vw] shadow-md hover:shadow-2xl hover:-translate-y-2 duration-300 h-[18vw] bg-white relative overflow-hidden rounded-xl bg-no-repeat bg-cover bg-center'>
                 <Link to={`/store/${id}`} state={{title, price, image, id, description}}>
                <img src={image} className='h-[40%] m-4 mx-auto'/>
                <div className='left-0 top-[45%] w-full h-[55%] bg-white p-5 flex flex-col justify-between items-center'>
                    <h1 className='text-base font-semibold '>{title}</h1>
                    <div className='flex flex-col items-center'>
                    <h1  className='text-xl font-bold text-green-500 left-4 bottom-4'>{price}$</h1>
                    <button className='p-2 font-bold text-white bg-green-600 border-4 border-green-800 rounded-xl' type='button' onClick={() => addToCart(products[id-1])}>Add to cart</button>
                    </div>
                </div></Link>
            </div>
        
    )
}

export default Card