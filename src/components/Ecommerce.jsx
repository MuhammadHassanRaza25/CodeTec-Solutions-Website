import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import ecommerceimage1 from "../assets/Images/ecommerceimage1.png"
import ecommerceimage2 from "../assets/Images/ecommerceimage2.png"
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function Ecommerce(){

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
                 <h2 className="rounded-md  text-center p-3 bg-lime-600 text-white font-semibold">E-commerce</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/graphicdesigning'}>
             <div>
                 <h2 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Graphic Designing</h2>
             </div>
           </Link>

       </div>

       {/* Ecommerce Services */}
        <section className="pt-8 bg-black text-gray-600 body-font">
                       <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                            
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                               <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                                 WordPress
                               </h1>
                               <p className="text-gray-300 mb-8 leading-relaxed">
                                 At CodeTec Solutions, we specialize in crafting dynamic, responsive, and feature-rich websites using WordPress, the world’s leading content management system. From custom themes to tailored plugins, our team leverages the flexibility and scalability of WordPress to deliver websites that align with your business goals. Whether you need an elegant portfolio, a robust e-commerce platform, or a corporate website, we ensure every project is optimized for performance, security, and SEO. With CodeTec Solution’s WordPress expertise, managing your online presence becomes effortless and impactful.
                               </p>
                            </div>
              
                            <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                               <img
                                 className="object-cover object-center rounded-md"
                                 alt="hero"
                                 src={ecommerceimage1}
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
                              src={ecommerceimage2}
                            />
                          </div>
                          
                          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
                            <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                               Shopify
                            </h1>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                               At CodeTec Solutions, we empower businesses to succeed in e-commerce with expertly crafted Shopify solutions. Our team specializes in designing and developing custom Shopify stores that are visually stunning, user-friendly, and tailored to your brand. From setting up your storefront to integrating powerful features like payment gateways, inventory management, and marketing tools, we ensure a seamless shopping experience for your customers. With CodeTec Solution’s Shopify expertise, you’ll have a scalable, secure, and performance-optimized platform to grow your online business with confidence.
                            </p>
                          </div>
               
                       </div>
                   </section>

      <Footer/>
    </>
 )
}

export default Ecommerce;