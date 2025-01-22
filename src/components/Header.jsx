import codetecsolutionsLogo from "../assets/Images/codetecsolutionsLogo.jpg"
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { useState } from "react";
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from "react-router";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function Header(){

  const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=>{
      Aos.init();
    },[])
  
    return(
      <>
      {/* <div>
        
        <div className="flex justify-center gap-16 pt-2 bg-black">
          <h2 className="flex items-center gap-2 text-lime-500"><MdEmail /> contact@codetecsolutions.com</h2>
          <h2 className="flex items-center gap-2 text-lime-500"><FaLocationArrow /> 3998 E 71st street, Cleveland, Ohio</h2>
        </div>
          
          <div className="pt-2 pb-2 flex items-center justify-between px-10 bg-black">
            <img className="h-20" src={codetecsolutionsLogo} alt="Codetec Solutions" />
             
             <div className="flex gap-5">
               <h1 className="font-bold text-white hover:text-lime-500">Home</h1>
               <select className="w-24 bg-black text-white hover:text-lime-500 font-bold focus:outline-none">
                 <option className="font-semibold bg-white text-gray-800">Services</option>
                 <option className="font-semibold bg-white text-gray-800">Software Development</option>
                 <option className="font-semibold bg-white text-gray-800">Mobile App Development</option>
                 <option className="font-semibold bg-white text-gray-800">E-commerce</option>
                 <option className="font-semibold bg-white text-gray-800">Graphic Designing</option>
               </select>
               <h1 className="font-bold text-white hover:text-lime-500">About</h1>
               <h1 className="font-bold text-white hover:text-lime-500">Contact</h1>
             </div>

             <div>
               <button className="font-semibold bg-lime-600 hover:bg-lime-700 text-white px-7 py-3 rounded-md">Request a Quote</button>
             </div>
          </div> 

      </div> */}

        <div data-aos="fade-down">
          
          <div className="flex justify-center gap-16 pt-3 bg-black">
            <h2 className="headerDetail flex items-center gap-2 text-lime-500"><MdEmail/> contact@codetecsolutions.com</h2>
            <h2 className="headerDetail flex items-center gap-2 text-lime-500"><FaLocationArrow /> 3998 E 71st street, Cleveland, Ohio</h2>
          </div>
    
          <div className="headerDiv pt-2 pb-3 px-14 flex items-center justify-between bg-black">
            <img className="logo h-20" src={codetecsolutionsLogo} alt="Codetec Solutions" />
    
            {/* Desktop menu */}
            <div className="hidden md:flex gap-5">
              <Link to={'/'}>
                <h1 className="font-bold text-white hover:text-lime-500">Home</h1>
              </Link>
              <Link to={'/allservices'}>
                <h1 className="font-bold text-white hover:text-lime-500">Services</h1>
              </Link>
              <Link to={'/about'}>
                <h1 className="font-bold text-white hover:text-lime-500">About</h1>
              </Link>
              <Link to={'/contact'}>
               <h1 className="font-bold text-white hover:text-lime-500">Contact</h1>
              </Link>
            </div>
    
             {/* Desktop 'Request a Quote' button */}
            <div className="hidden md:flex">
              <Link to={'/contact'}>
              <button className="font-semibold bg-lime-600 hover:bg-lime-500 text-white px-7 py-3 rounded-md">
                Request a Quote
              </button>
              </Link>
            </div>
    
            {/* Mobile menu icon */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                {menuOpen ? <HiX size={30} className="bg-black" /> : <HiMenu size={30} className="bg-black"  />}
              </button>
            </div>
    
          </div>
    
          {/* Mobile Menu - Toggles visibility based on `menuOpen` state */}
          {menuOpen && (
            <div className="md:hidden flex flex-col gap-5 items-center bg-black text-white py-4">
               <Link to={'/'}>
                <h2 className="font-bold text-white hover:text-lime-500">Home</h2>
              </Link>
              <Link to={'/allservices'}>
                <h2 className="font-bold text-white hover:text-lime-500">Services</h2>
              </Link>
               <Link to={'/about'}>
                 <h2 className="font-bold text-white hover:text-lime-500">About</h2>
               </Link>
               <Link to={'/contact'}>
                 <h2 className="font-bold text-white hover:text-lime-500">Contact</h2>
               </Link>
               <Link to={'/contact'}>
              <button className="font-semibold bg-lime-600 hover:bg-lime-500 text-white px-7 py-3 rounded-md">
                Request a Quote
              </button>
              </Link>
            </div>
          )}
        </div>
      </>
    )
}

export default Header;