import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import AllServices from './components/AllServices.jsx'
import MobileAppDevelopment from './components/MobileAppDevelopment.jsx'
import Ecommerce from './components/Ecommerce.jsx'
import GraphicDesigning from './components/GraphicDesigning.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<About/>}></Route>
         <Route path="/contact" element={<Contact/>}></Route>
         <Route path="/allservices" element={<AllServices/>}></Route>
         <Route path="/mobileappDevelopment" element={<MobileAppDevelopment/>}></Route>
         <Route path="/ecommerce" element={<Ecommerce/>}></Route>
         <Route path="/graphicdesigning" element={<GraphicDesigning/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
