import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import graphicimage1 from "../assets/Images/graphicimage1.jpg"
import graphicimage2 from "../assets/Images/graphicimage2.jpg"
import graphicimage3 from "../assets/Images/graphicimage3.jpg"
import graphicimage4 from "../assets/Images/graphicimage4.jpg"
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function GraphicDesigning(){

    useEffect(()=>{
            Aos.init();
    },[])
  
  return(
    <>
      <Header/>
       
       <div className="servicesBar flex items-center justify-between gap-1 rounded-md border-2 bg-gray-200 mt-14 mx-14">

           <Link className="cursor-pointer w-full hover:text-white" to={'/allservices'}>
             <div>
                 <h2 className="rounded-md text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Software Development</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/mobileappDevelopment'}>
             <div>
                 <h2 className="rounded-md text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Mobile Development</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/ecommerce'}>
             <div>
                 <h2 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">E-commerce</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/graphicdesigning'}>
             <div>
                 <h2 className="rounded-md  text-center p-3 bg-lime-600 text-white hover:text-white font-semibold">Graphic Designing</h2>
             </div>
           </Link>

       </div>

       {/* Graphic Designing Services */}
               <section className="pt-5 bg-black text-gray-600 body-font">
                <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                  
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[80vw] mb-10 md:mb-0" data-aos="fade-up">
                    <img
                      className="object-cover object-center rounded"
                      alt="hero"
                      src={graphicimage1}
                    />
                  </div>
                  
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
                    <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                       Designing & Production
                    </h1>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                       For designing services, CodeTec Solutions is your go-to partner. We’re dedicated to transforming your ideas into stunning visuals that captivate and inspire. From web design and branding to graphics, our talented team of creatives is here to bring your vision to reality. With a focus on detail and a passion for excellence, we create designs that make a lasting impact. Experience the magic of exceptional design with Codetec Solutions—where your creative journey begins.
                    </p>
                  </div>
       
               </div>
           </section>        
       
           <section className="pt-5 bg-black text-gray-600 body-font">
                <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                     
                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                        <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                          Our Expertise
                        </h1>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                           At CodeTec Solutions, we take pride in delivering exceptional design solutions that combine creativity with innovation. Our talented team blends modern design principles with a deep understanding of technology to create visually striking and highly functional designs. Whether it’s designing intuitive user interfaces, creating impactful graphics, or building a strong brand identity, our experts are here to exceed your expectations. With a proven history of crafting outstanding designs, we’re committed to enhancing your digital presence and making your projects stand out. Let us turn your ideas into stunning visual realities.
                        </p>
                     </div>
       
                     <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                        <img
                          className="object-cover object-center rounded-md"
                          alt="hero"
                          src={graphicimage2}
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
                      src={graphicimage3}
                    />
                  </div>
                  
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
                    <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                      Graphic Designing
                    </h1>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      At CodeTec Solutions, we specialize in the art of visual storytelling. Our expert team transforms your ideas into compelling visuals, from logos to marketing materials. With a sharp focus on aesthetics and detail, we create designs that leave a lasting impression. Elevate your brand with our graphic design excellence.
                    </p>
                  </div>
       
               </div>
           </section> 
       
           <section className="pt-5 bg-black text-gray-600 body-font">
                <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                     
                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                        <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                          UI/UX Desiging
                        </h1>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                          At CodeTec Solutions, we design exceptional user experiences. Our skilled team creates intuitive interfaces that engage users and deliver impactful results. Enhance your digital products with our user-focused design expertise. Your journey to outstanding UI/UX begins here.
                        </p>
                     </div>
       
                     <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                        <img
                          className="object-cover object-center rounded-md"
                          alt="hero"
                          src={graphicimage4}
                        />
                     </div>
       
                  </div>
              </section>
       
      <Footer/>
    </>
 )
}

export default GraphicDesigning;