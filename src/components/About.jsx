import Footer from "./Footer";
import Header from "./Header";
import heroimage from "../assets/Images/heroimage.jpg"
import hero2 from "../assets/Images/hero2.jpg"
import aboutimage1 from "../assets/Images/aboutimage1.jpg"
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function About() {

     useEffect(()=>{
        Aos.init();
      },[])

    return(
      <>
        <Header/>

        <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
           
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[80vw] mb-10 md:mb-0" data-aos="fade-up">
             <img
               className="object-cover object-center rounded"
               alt="hero"
               src={hero2}
             />
           </div>
           
           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
             <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
               WHO WE ARE ?
             </h1>
             <p className="text-gray-300 mb-8 leading-relaxed">
               CodeTec Solutions is a dynamic software house that brings digital solutions to life. With a focus on innovation and design, we specialize in crafting seamless web, mobile, and desktop applications. Our team is dedicated to curating exceptional user experiences while leveraging digital marketing to help businesses grow and thrive. At CodeTec Solutions, we are shaping the future of the digital world.
             </p>
           </div>

        </div>
    </section>        

    <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
              
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                 <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                   About CodeTec Solutions
                 </h1>
                 <p className="text-gray-300 mb-8 leading-relaxed">
                    CodeTec Solutions is a dynamic digital solutions company dedicated to helping businesses thrive in the ever-evolving online landscape. We specialize in web design, development, software solutions, UI/UX design, and digital marketing. From creating engaging websites and intuitive applications to delivering scalable e-commerce platforms and custom software, CodeTech Solutions combines innovation, expertise, and a client-first approach to deliver exceptional results. Our goal is to empower brands with cutting-edge technology and seamless user experiences, turning visions into impactful digital realities.
                 </p>
              </div>

              <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                 <img
                   className="object-cover object-center rounded-md"
                   alt="hero"
                   src={aboutimage1}
                 />
              </div>

           </div>
       </section>

       <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
           
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[80vw] mb-10 md:mb-0" data-aos="fade-up">
             <img
               className="object-cover object-center rounded"
               alt="hero"
               src={hero2}
             />
           </div>
           
           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
             <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
               Our Mission
             </h1>
             <p className="text-gray-300 mb-8 leading-relaxed">
               Our mission at CodeTec Solutions is to empower businesses by delivering innovative, reliable, and user-focused digital solutions. We are committed to combining creativity, technology, and expertise to create exceptional websites, applications, and software that drive growth, enhance user experiences, and foster long-term success for our clients.
             </p>
           </div>

        </div>
    </section> 

    <section className="pt-5 bg-black text-gray-600 body-font">
         <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
              
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                 <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                   Our Vission
                 </h1>
                 <p className="text-gray-300 mb-8 leading-relaxed">
                   CodeTec Solutions is a dynamic digital solutions company dedicated to helping businesses thrive in the ever-evolving online landscape. We specialize in web design, development, software solutions, UI/UX design, and digital marketing. From creating engaging websites and intuitive applications to delivering scalable e-commerce platforms and custom software, CodeTec Solutions combines innovation, expertise, and a client-first approach to deliver exceptional results. Our goal is to empower brands with cutting-edge technology and seamless user experiences, turning visions into impactful digital realities.
                 </p>
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

       <div className="flex flex-wrap gap-10 justify-evenly">

         <div className="flex gap-3 justify-center flex-col items-center" data-aos="fade-up"> 
           <h1 className="font-bold text-6xl text-lime-500">80+</h1>
           <h2 className="text-lg font-semibold text-gray-100">Number of Projects</h2>
         </div>

         <div className="flex gap-3 justify-center flex-col items-center" data-aos="fade-up"> 
           <h1 className="font-bold text-6xl text-lime-500">80+</h1>
           <h2 className="text-lg font-semibold text-gray-100">Happy Clients</h2>
         </div>

         <div className="flex gap-3 justify-center flex-col items-center" data-aos="fade-up"> 
           <h1 className="font-bold text-6xl text-lime-500">30</h1>
           <h2 className="text-lg font-semibold text-gray-100">Employees</h2>
         </div>

         <div className="flex gap-3 justify-center flex-col items-center" data-aos="fade-up"> 
           <h1 className="font-bold text-6xl text-lime-500">4,500+</h1>
           <h2 className="text-lg font-semibold text-gray-100">Worked Hours</h2>
         </div>

       </div>

        <Footer/>
      </>
    )
}

export default About;