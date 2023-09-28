import React, { useState } from 'react'

function CartCard({ product, updateTotal }) {

    const [count, setCount] = useState(1);

    const handleInput = (e) => {
        e.target.value > 0 ? product.quantity = e.target.value : null
        updateTotal();
    }

    return (
        <>

            <div key={product.id} className='card-wrapper w-[12vw] h-[7vw] bg-white border-4 border-slate-900 relative overflow-hidden rounded-xl flex'>
                <img src={product.image} className='w-[40%]' />
                <div className=' left-0 h-[100%] w-[60%] bg-zinc-800 text-white p-2 relative'>
                    <h1 className='text-base font-semibold '>{product.title}</h1>
                    <h1 className='absolute text-xl font-bold text-green-500 bottom-1 left-2'>{product.price}$</h1>
                    <input onChange={handleInput} value={product.quantity} type="number" className='absolute right-1 bottom-1 bg-zinc-900 w-[40%] rounded-xl flex justify-center text-center text-base' />
                </div>
            </div>

        </>
    )
}

export default CartCard