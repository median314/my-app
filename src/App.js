import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react';
import Register from './Pages/Register';
import Langganan from './Pages/Langganan';
import KatalogPelatihan from './Pages/KatalogPelatihan';
import Login from './Pages/Login';
import Carousel from './Components/HeaderCarousel';
import InformasiPelatihan from './Pages/InformasiPelatihan';
import MesinKasir from './Pages/MesinKasir';
import ShoppingCart from './Pages/ShoppingCart';
import Firebase from './Pages/Firebase';
import MenuMakanan from './Pages/MenuMakanan';
import DashboardProfile from './Pages/DashboardProfile';
import Profile from './Pages/Profile';
import Todos from './Pages/Todos';
import TodosLogin from './Pages/TodosLogin';
import TodosSignUp from './Pages/TodosSignUp';
import { UserAuthContextProvider } from './context/userAuthContext';
import ProtectedRoute from './Components/ProtectedRoute'

function App() {
  return (
    <ChakraProvider>
      <UserAuthContextProvider>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/langganan' element={<Langganan />} />
        <Route path='/katalog-pelatihan' element={<KatalogPelatihan />} />
        <Route path='/login' element={<Login />} />
        <Route path='/info-pelatihan' element={<InformasiPelatihan />} />
        <Route path='/mesinkasir' element={<MesinKasir />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/firebase' element={<Firebase />} />
        <Route path='/menumakanan' element={<MenuMakanan />} />
        <Route path='/dashboard' element={<DashboardProfile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/todos' element={<ProtectedRoute><Todos /></ProtectedRoute>} />
        <Route path='/todoslogin' element={<TodosLogin />} />
        <Route path='/todossignup' element={<TodosSignUp />} />
      </Routes>
      </UserAuthContextProvider>
    </ChakraProvider>
    
  );
}

export default App;
