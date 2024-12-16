import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'
import Admin from './pages/Admin'
import Produtos from './pages/Produtos'
import Alterar from './pages/Alterar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/registro" element={<Registrar/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/produtos" element={<Produtos/>}/>
            <Route path="/alterar/:id" element={<Alterar/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>
)
