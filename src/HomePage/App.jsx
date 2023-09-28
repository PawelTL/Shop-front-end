import { useEffect, useState } from 'react'
import './App.css'
import { motion } from 'framer-motion'
import Card from '../Card'

function App() {

  const [products, setProducts] = useState([])

  const loadMovies = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=4')
    const data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    loadMovies();
    console.log(products)
  }, [])


  return (
    <motion.div
      className='bg-slate-600 w-[screen] mt-[9vh] pb-[8vh]'
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}>
      <div className='w-full bg-no-repeat bg-cover relative'>
        <img src='https://as1.ftcdn.net/v2/jpg/04/52/38/26/1000_F_452382698_y6SU2xlHYBv1njIYUmSev5FYLduY8euD.jpg'  className='m-0 p-0 w-full'/>
        <h1 className='welcome-text text-8xl font-bold absolute top-[40%] w-full text-center'>Welcome to StoreName</h1>
      </div>
      <h1 className='w-full text-5xl text-white font-bold text-center m-10'>Featured items</h1>
      <div className='flex justify-evenly w-[60vw] mx-auto pb-4'>
        {products.length > 0 ?
          products.map((product) => { return <Card title={product.title} price={product.price} image={product.image} id={product.id} key={product.id} /> })
          : "Loading..."}
      </div>

    </motion.div>
  )
}

export default App
