import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import softwareimage1 from "../assets/Images/softwareimage1.png"
import softwareimage2 from "../assets/Images/softwareimage2.png"
import { FaUserCheck } from "react-icons/fa";

function AllServices() {
    return(
       <>
         <Header/>
          
          <div className="servicesBar flex items-center justify-between gap-1 rounded-md border-2 bg-gray-200 mt-14 mx-14">

              <Link className="cursor-pointer w-full hover:text-white" to={'/allservices'}>
                <div>
                    <h1 className="rounded-md text-center p-3 bg-lime-600 text-white hover:text-white font-semibold">Software Development</h1>
                </div>
              </Link>

              <Link className="cursor-pointer w-full hover:text-white" to={'/mobileappDevelopment'}>
                <div>
                    <h1 className="rounded-md text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Mobile Development</h1>
                </div>
              </Link>

              <Link className="cursor-pointer w-full hover:text-white" to={'/ecommerce'}>
                <div>
                    <h1 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">E-commerce</h1>
                </div>
              </Link>

              <Link className="cursor-pointer w-full hover:text-white" to={'/graphicdesigning'}>
                <div>
                    <h1 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Graphic Designing</h1>
                </div>
              </Link>

          </div>

          {/* Software Development Services */}
          <section className="pt-8 bg-black text-gray-600 body-font">
                   <div className="mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                     
                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-[70vw] mb-10 md:mb-0">
                       <img
                         className="object-cover object-center rounded"
                         alt="hero"
                         src={softwareimage1}
                       />
                     </div>
                     
                     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
                       <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                         Development
                       </h1>
                       <p className="text-gray-300 mb-8 leading-relaxed">
                         A commitment to quality and forward-thinking in the realm of IT services and consulting, positioning CodeTec Solutions as a leader in creating solutions that are not just current but also geared towards future industry demands.
                       </p>
                     </div>
          
                  </div>
              </section> 

          <section className="bg-black text-gray-600 body-font">
                       <div className="mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                            
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
                               <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                                 More Than 10 Years Of Experience​
                               </h1>
                               <p className="text-gray-300 mb-8 leading-relaxed">
                                 We understand that having a strong online presence is crucial for any business. That’s why we specialize in providing comprehensive development services that drive growth and success for your business.
                               </p>
                               
                               <div className="flex gap-8">
                                 <span className="flex flex-col items-center justify-center gap-3 font-bold text-5xl text-lime-500"> 80+ <span className="text-lg text-gray-300">Number of Projects</span></span>
                                 <span className="flex flex-col items-center justify-center gap-3 font-bold text-5xl text-lime-500"> 80+ <span className="text-lg text-gray-300">Happy Clients</span></span>
                               </div>

                            </div>
              
                            <div className="lg:w-[32vw] md:w-1/2 w-[70vw]">
                               <img
                                 className="object-cover object-center rounded-md"
                                 alt="hero"
                                 src={softwareimage2}
                               />
                            </div>
              
                         </div>
          </section>

             
            <div className="flex flex-wrap justify-between px-20">
              <h1 className="text-4xl font-semibold text-lime-500">WHAT WE CAN OFFER</h1>
              <p className="text-gray-300">We are constantly striving to improve our offerings so that our clients can <br /> benefit from the latest advances in technology.</p>
            </div>

            <div className="mt-20 flex flex-wrap gap-10 justify-between px-20">

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Web Development</h1>
                  <p className="text-gray-300">At CodeTec Solutions, we build responsive, secure, and scalable web solutions tailored to your needs. Combining cutting-edge technology with intuitive design, we create websites and web applications that drive growth, enhance user experience, and set your brand apart online.</p>
               </div>

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Web App Development</h1>
                  <p className="text-gray-300">At CodeTec Solutions, we specialize in web app development that delivers powerful, user-friendly, and scalable solutions. From dynamic interfaces to robust backends, we create web applications tailored to your business needs, ensuring seamless performance and exceptional user experiences.</p>
               </div>

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Mobile App Development</h1>
                  <p className="text-gray-300">At CodeTec Solutions, we create high-quality mobile applications tailored for iOS and Android. Combining sleek design with robust functionality, our apps deliver seamless user experiences, performance, and scalability to meet your business goals.</p>
               </div>

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Desktop Application Development</h1>
                  <p className="text-gray-300">At CodeTec Solutions, we develop custom desktop applications designed for performance, reliability, and user-friendliness. Tailored to your business needs, our solutions ensure seamless functionality, scalability, and compatibility across various operating systems, driving efficiency and growth.</p>
               </div>

            </div>

            {/* clients feedback */}
            <div className="mt-32">
               <h1 className="flex items-center justify-center gap-5 text-4xl text-lime-500 font-semibold">Clients Feedback <FaUserCheck /></h1>
            </div>

            <div className="mt-12 flex flex-wrap gap-10 justify-between px-20">

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Umaima Azeez <br /> <span className="text-gray-400 text-xl">Business Owner</span></h1>
                  <p className="text-gray-300">We partnered with CodeTec Solutionsfor the development of a custom desktop application to streamline our internal processes. From concept to implementation, their team showcased exceptional expertise and professionalism. They thoroughly understood our complex requirements and delivered a robust, user-friendly application ahead of schedule. The solution has significantly enhanced our workflow efficiency, and we commend CodeTec Solution’s dedication and technical excellence.</p>
               </div>

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Danish Owais <br /> <span className="text-gray-400 text-xl">Founder & CEO</span></h1>
                  <p className="text-gray-300">I had the pleasure of working with the talented web design team at CodeTec Solutionsfor our company’s website redesign project. Their creativity and attention to detail truly impressed me. They not only crafted a visually stunning website but also ensured a seamless user experience. Our website now reflects our brand identity perfectly, and we’ve received numerous compliments from our customers. I highly recommend CodeTec Solutions for their exceptional web design expertise.</p>
               </div>

               <div>
                  <h1 className="mb-4 text-lime-500 font-semibold text-3xl">Saad Ahmed <br /> <span className="text-gray-400 text-xl">Founder & Director</span></h1>
                  <p className="text-gray-300">CodeTec Solutions exceeded our expectations in creating a modern and captivating website for our tech startup. Their team demonstrated a deep understanding of our vision and industry trends. They incorporated innovative design elements, resulting in a website that not only looks great but also functions flawlessly. The user experience they crafted has been a game-changer for us, enhancing our online presence and customer engagement. We’re grateful for the expertise and dedication of CodeTec Solutions.</p>
               </div>

            </div>

         <Footer/>
       </>
    )
}

export default AllServices;