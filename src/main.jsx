import { React } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './non-animated/Navbar.jsx'
import Footer from './non-animated/Footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import AnimatedRoutes from './AnimatedRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
  </Router>,
)
