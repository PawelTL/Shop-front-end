import { useState, useEffect } from 'react'
import './Store.css'
import { motion } from 'framer-motion'
import Card from '../Card';


function Store({ products, loadProducts }) {

  const [list, setList] = useState(products);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [filter, setFilter] = useState("all")


  useEffect(() => {
    if (filter !== "all") {setList(products.filter((p) => p.category === filter))}
    else {setList(products)}
    setActiveDropdown(false)
  }, [filter])
  

  return (
    <motion.div
      className='w-screen bg-slate-100 mt-[9vh] pb-[9vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1,} }}>

      <div className='relative flex items-center'>
        <h1 className='px-16 py-3 text-5xl font-semibold'>Our Products {'>'}</h1>
        <button type='button' onClick={() => setActiveDropdown(!activeDropdown)} className='bg-slate-300 w-[8vw] h-[2.5vw] text-4xl rounded-xl border-2 border-slate-400 font-bold'>All</button>
        {activeDropdown ? <motion.ul initial={{scaleY: 0}} animate={{scaleY: 1}} className=' origin-top absolute top-[100%] left-[24%] z-10 flex flex-col w-[12vw] h-[15vw] bg-slate-100 border-4 border-slate-300 rounded-md text-xl justify-evenly'>
          <li className='w-full p-3 border-b-2 cursor-pointer border-slate-400' onClick={() => setFilter("all")}>All</li>
          <li className='w-full p-3 border-b-2 cursor-pointer border-slate-400' onClick={() => setFilter("electronics")}>Electronics</li>
          <li className='w-full p-3 border-b-2 cursor-pointer border-slate-400' onClick={() => setFilter("jewelery")}>Jewelery</li>
          <li className='w-full p-3 border-b-2 cursor-pointer border-slate-400' onClick={() => setFilter("men's clothing")}>Men's clothing</li>
          <li className='w-full p-3 cursor-pointer' onClick={() => setFilter("women's clothing")}>Women's clothing</li>
        </motion.ul> : null}
      </div>
      <div className='flex flex-wrap justify-start w-full gap-6 px-10 pb-4'>
        {list.length > 0 ?
          list.map((product) => { return <Card title={product.title} price={product.price} image={product.image} description={product.description} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>





    </motion.div>
  )
}

export default Store
