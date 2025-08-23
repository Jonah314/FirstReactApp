import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import ContentArea from './components/ContentArea.jsx'
import ProductArea from './components/MainProductArea/ProductArea.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Banner />
    <App />
    <ContentArea />
    
  </StrictMode>,
)
