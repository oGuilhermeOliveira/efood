import { Route, Routes } from 'react-router-dom'
import HomePag from '../src/pages/home'
import Product from '../src/pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePag />} />
    <Route path="/product" element={<Product />} />
  </Routes>
)

export default Rotas
