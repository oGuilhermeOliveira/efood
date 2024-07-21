import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Product from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)

export default Rotas
