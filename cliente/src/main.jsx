import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RegistrarUsuario from './pages/RegistroUsuario'
import RegistrarProduto from './pages/RegistroProduto'
import Admin from './pages/Admin'
import Produtos from './pages/Produtos'
import Alterar from './pages/AlterarUsuario'
import AlterarProduto from './pages/AlterarProduto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registro" element={<RegistrarUsuario/>}/>
            <Route path="/registroProduto" element={<RegistrarProduto/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/alterar/:id" element={<Alterar/>}/>
            <Route path="/alterarProduto/:id" element={<AlterarProduto/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>
)
