import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Bounce, Slide, ToastContainer, Zoom } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <ToastContainer position='top-right' theme='light'/>
    <App />
  </BrowserRouter>
  // </StrictMode>,
)
