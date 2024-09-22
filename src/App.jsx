import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Headerloginsignup from '../pages/headerloginsignup'
import HeaderUser from '../pages/headerUser'
import DashobardUser from '../pages/dashboard'
import Productdetails from '../pages/productDetails'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { auth, onAuthStateChanged } from '../firebase/firebase'
import CartDetails from '../pages/cartDetails'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Headerloginsignup />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<DashobardUser />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashobardUser />} />
          <Route path='/product/:id' element={<Productdetails />} />
          <Route path='/cart' element={<CartDetails />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
