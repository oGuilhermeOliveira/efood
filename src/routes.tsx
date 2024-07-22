import { Route, Routes } from 'react-router-dom'
import HomePag from './pages/Home'
import MenuPag from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePag />} />
    <Route path="/product" element={<MenuPag />} />
  </Routes>
)

export default Rotas
