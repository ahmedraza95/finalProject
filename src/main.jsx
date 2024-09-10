import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContexprovider from '../context/headerContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContexprovider>
      <App />
    </UserContexprovider>
  </StrictMode>,
)
