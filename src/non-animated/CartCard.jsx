import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function CartCard({ product, updateTotal, cart }) {

    console.log(cart)


    const handleInput = (e) => {
        e.target.value > 0 ? product.quantity = e.target.value : null
        updateTotal();
    }

    const incrementQuantity = () => {
        product.quantity += 1;
        updateTotal();
    }

    const decrementQuantity = () => {
        product.quantity > 1 ? product.quantity -= 1 : null;
        updateTotal();
    }

    const removeItem = () => {
        let index = cart.findIndex((e) => e.id == product.id)
        cart.splice(index, 1)
        updateTotal();
    }

    return (
        <>

            <div key={product.id} className='card-wrapper w-[12vw] h-[9vw] bg-white shadow-md relative overflow-hidden rounded-xl flex flex-wrap  flex-shrink-0'>
                <Link className='w-[40%] p-1' state={product} to={`/store/${product.id}`}><img src={product.image} /></Link>
                <div className=' left-0 h-[100%] w-[60%] bg-slate-50 p-2 relative borcer-b-2 border-black'>
                    <h1 className='text-base font-semibold h-[60%] overflow-clip'>{product.title}</h1>
                </div>
                <div>
                    <h1 className='absolute text-2xl font-bold text-green-500 bottom-2 left-2'>{product.price}$</h1>
                    <div className='flex absolute bottom-1 right-[20%] justify-center border-2 border-black'>
                        <button type='button' onClick={decrementQuantity} className='w-[25px] flex justify-center items-center font-bold'>-</button>
                        <input onChange={handleInput} value={product.quantity} type="text" className='bottom-1 bg-slate-200 w-[30px] flex justify-center text-center text-base' />
                        <button type='button' onClick={incrementQuantity} className='w-[25px] flex justify-center items-center font-bold'>+</button>
                    </div>
                    <div onClick={removeItem} className='flex absolute bottom-2 right-2 justify-center items-center text-red-600 w-[28px] h-[28px] cursor-pointer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytXS3HjhcRPoqgcrgKGUw9xvt41Z7u4X89Q&usqp=CAU'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartCard