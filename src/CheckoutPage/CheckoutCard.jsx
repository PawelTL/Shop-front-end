import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function CheckoutCard({ product, updateTotal }) {

    const incrementQuantity = () => {
        product.quantity += 1;
        updateTotal();
    }

    const decrementQuantity = () => {
        product.quantity > 1 ? product.quantity -= 1 : null;
        updateTotal();
    }
    const handleInput = (e) => {
        e.target.value > 0 ? product.quantity = e.target.value : null
        updateTotal();
    }

    const removeItem = () => {
        let index = cart.findIndex((e) => e.id == product.id)
        cart.splice(index, 1)
        updateTotal();
    }

    return (

        <div className='card-wrapper w-[40vw] shadow-md min-h-[10vw] bg-white relative overflow-hidden rounded-xl flex flex-row'>
            <Link className='flex' to={`/store/${product.id}`} state={{ product: product }}>
                <img src={product.image} className='w-[12vw] px-4 py-2 mx-auto' />
            </Link>
            <div className='flex flex-col items-center justify-between w-full p-5 text-center bg-white '>
                <h1 className='w-full text-2xl font-semibold'>{product.title}</h1>
                <div>
                    <div className='flex bottom-1 gap-4 right-[20%] justify-center mb-1'>
                        <div className='flex w-[60%] border-2 border-black '>
                            <button type='button' onClick={decrementQuantity} className='w-[40%] flex justify-center items-center font-bold'>-</button>
                            <input onChange={handleInput} value={product.quantity} type="text" className='bottom-1 bg-slate-200 w-[30px] flex justify-center text-center text-base' />
                            <button type='button' onClick={incrementQuantity} className='w-[40%] flex justify-center items-center font-bold'>+</button>

                        </div>
                        <div onClick={removeItem} className='flex justify-center items-center text-red-600 w-[28px] h-[28px] cursor-pointer'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytXS3HjhcRPoqgcrgKGUw9xvt41Z7u4X89Q&usqp=CAU' />
                        </div>
                    </div>
                    <h1 className='text-5xl font-bold text-green-500'>{(product.price * product.quantity).toFixed(2)}$</h1>
                </div>
            </div>

        </div>

    )
}

export default CheckoutCard