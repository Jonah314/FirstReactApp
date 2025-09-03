
import './App.css'
import HomePage from './Pages/HomePage.jsx';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';;
import AboutMePage from './Pages/AboutMePage..jsx';
import ShoppingCart from './Pages/ShoppingCart.jsx';


function App() {
 return (
 <BrowserRouter>
    {/*Navigation */}
    <nav>
      <div className = 'max-w-full max-h-52 bg-slate-500 text-center mx-auto sticky top-0 z-50' >
                
                <Link to= "/">Home</Link> | {" "}
                <Link to = "/Pages/AboutMePage">About Me Page</Link> | {" "}
                <Link to = "/Pages/ShoppingCart">ShopingCart</Link>
            </div>
    </nav>

    {/*Routes*/}
    <Routes>
      <Route path = "/" element = {<HomePage />}/>
      <Route path = "/Pages/AboutMePage" element = {<AboutMePage/>}/>
      <Route path = "/Pages/ShopingCart" element = {<ShoppingCart/>}/>
    </Routes>
 
 </BrowserRouter>
 );
}

export default App;