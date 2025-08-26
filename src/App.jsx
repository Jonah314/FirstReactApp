import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'
import Banner from './components/Banner.jsx'
import ContentArea from './components/ContentArea.jsx'

import Footer from './components/Footer.jsx'


function App() {
 return (
 <> 
  <NavBar />
    <Banner />
    <ContentArea />
    <Footer />

 </>
 )
}

export default App;