import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import ListaDepartamento from '../pages/ListaDepartamento'
import Citas from '../pages/Citas'

const AppRouter = () => {
    return (
        <Routes>
            <Route>
                <Route path='lista' element={<ListaDepartamento/>}></Route>
                <Route path='reserva' element={<Citas/>}></Route>
                <Route path='/' element={<Login />} />
            </Route>  
        </Routes>
    )
}

export default AppRouter
