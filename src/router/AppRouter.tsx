import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Citas from '../pages/Citas'
import PerfilUser from '../pages/PerfilUser'
import ListaVisitas from '../pages/ListaVisitas'
import DetalleVisita from '../pages/DetalleVisita'


const AppRouter = () => {
   

return (
        <Routes>
            <Route>
                <Route path='perfil' element={<PerfilUser/>}></Route>
                <Route path='lista' element={<ListaVisitas/>}></Route>
                <Route path='reserva' element={<Citas/>}></Route>
                <Route path="/lista/:visitaid" element={<DetalleVisita />} />
                <Route path='/' element={<Login />} />
            </Route>  
        </Routes>
    )
}

export default AppRouter
