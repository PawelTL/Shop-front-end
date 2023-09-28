import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card({ title, price, image, id, description }) {
    return (
        <Link to={`/store/${id}`} state={{title, price, image, id, description}}>
            <div className='card-wrapper w-[13vw] h-[18vw] bg-white border-4 border-slate-900 relative overflow-hidden rounded-xl bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${image})`, backgroundSize: "95%" }}>
                <div className='absolute left-0 top-[70%] w-full h-[30%] bg-zinc-800 text-white p-2'>
                    <h1 className='text-lg font-semibold '>{title}</h1>
                    <h1 className='absolute text-xl font-bold text-green-500 left-2 bottom-2'>{price}$</h1>
                </div>
            </div>
        </Link>
    )
}

export default Card