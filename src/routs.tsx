import { Route, Routes } from 'react-router-dom'
import HomePag from './pages/Home'
import MenuPag from './pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePag />} />
    <Route path="/cardapio/:id" element={<MenuPag />} />
  </Routes>
)

export default Rotas
