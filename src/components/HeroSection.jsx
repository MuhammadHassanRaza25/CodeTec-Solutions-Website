import heroimage from "../assets/Images/heroimage.jpg"
import hero2 from "../assets/Images/hero2.jpg"
import { Link } from "react-router";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function HeroSection(){

  useEffect(()=>{
    Aos.init();
  },[])

    return(
     <>
      <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
              
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                 <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                   CodeTec Solutions
                 </h1>
                 <p className="text-gray-300 mb-8 leading-relaxed">
                  CodeTec Solutions is a dynamic software house that brings digital solutions to life. With a focus on innovation and design, we specialize in crafting seamless web, mobile, and desktop applications. Our team is dedicated to curating exceptional user experiences while leveraging digital marketing to help businesses grow and thrive. At Codetec Solutions, we are shaping the future of the digital world.
                 </p>
                  <div className="flex lg:justify-center justify-start gap-3">
                      <Link to={'/about'}>
                         <button className="inline-flex text-lg font-semibold bg-lime-600 hover:bg-lime-500 text-white px-8 py-2 rounded-md">About</button>
                       </Link>
                      <Link to={'/contact'}>
                         <button className="inline-flex text-lg font-semibold bg-gray-100 text-black px-8 py-2 rounded-md">Contact</button>
                       </Link>
                  </div>
              </div>

              <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                 <img
                   className="object-cover object-center rounded-md"
                   alt="hero"
                   src={heroimage}
                 />
              </div>

           </div>
       </section>

       <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
           
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[80vw] mb-10 md:mb-0" data-aos="fade-right">
             <img
               className="object-cover object-center rounded"
               alt="hero"
               src={hero2}
             />
           </div>
           
           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-right">
             <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
               WHAT WE DO ?
             </h1>
             <p className="text-gray-300 mb-8 leading-relaxed">
               At CodeTec Solutions, we transform ideas into powerful digital solutions. We specialize in creating seamless web, mobile, and desktop applications designed to meet the unique needs of businesses. Our expertise extends to crafting captivating user experiences and implementing effective digital marketing strategies that drive growth. Whether it’s innovative software development, professional web design, or tailored UX/UI solutions, we build the tools to shape your digital success.
             </p>
           </div>

        </div>
    </section>
     </>
    )
}

export default HeroSection;