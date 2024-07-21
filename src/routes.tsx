import { Route, Routes } from 'react-router-dom'
import HomePag from './pages/Home'
import Product from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePag />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)

export default Rotas
