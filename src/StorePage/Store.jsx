import { useState, useEffect } from 'react'
import './Store.css'
import { motion } from 'framer-motion'
import Card from '../Card';


function Store({ products, loadProducts }) {
  useEffect(() => {
    loadProducts();
  }, [])

  const jewelery = products.filter(p => p.category == "jewelery");
  const electronics = products.filter(p => p.category == "electronics");
  const menClothing = products.filter(p => p.category == "men's clothing");
  const womenClothing = products.filter(p => p.category == "women's clothing");


  return (
    <motion.div
      className='w-screen bg-slate-600 my-[9vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>

      <h1 className='px-16 py-3 text-5xl font-semibold text-white'>Jewelery</h1>
      <div className='flex justify-start w-full gap-4 px-10 pb-4'>
        {jewelery.length > 0 ?
          jewelery.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>
      <h1 className='px-16 py-3 text-5xl font-semibold text-white'>Electronics</h1>
      <div className='flex justify-start w-full gap-4 px-10 pb-4'>
        {electronics.length > 0 ?
          electronics.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>
      <h1 className='px-16 py-3 text-5xl font-semibold text-white'>Men's Clothing</h1>
      <div className='flex justify-start w-full gap-4 px-10 pb-4'>
        {menClothing.length > 0 ?
          menClothing.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>
      <h1 className='px-16 py-3 text-5xl font-semibold text-white'>Women's Clothing</h1>
      <div className='flex justify-start w-full gap-4 px-10 pb-4'>
        {womenClothing.length > 0 ?
          womenClothing.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>




    </motion.div>
  )
}

export default Store
