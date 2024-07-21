import { Route, Routes } from 'react-router-dom'
import HomePag from '../src/pages/home'
import MenuPag from '../src/pages/Menu'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<HomePag />} />
    <Route path="/cardapio/:id" element={<MenuPag />} />
  </Routes>
)

export default Rotas
