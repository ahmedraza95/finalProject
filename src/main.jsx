import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexprovider from '../context/headerContext'
import CartContextProvider from '../context/cartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContexprovider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UserContexprovider>
  </StrictMode >,
)
