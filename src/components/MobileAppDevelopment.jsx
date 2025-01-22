import { Link } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import mobileimage1 from "../assets/Images/mobileimage1.jpg"
import mobileimage2 from "../assets/Images/mobileimage2.jpg"
import mobileimage3 from "../assets/Images/mobileimage3.jpg"
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function MobileAppDevelopment(){

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
                 <h2 className="rounded-md text-center p-3 bg-lime-600 text-white hover:text-white font-semibold">Mobile Development</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/ecommerce'}>
             <div>
                 <h2 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">E-commerce</h2>
             </div>
           </Link>

           <Link className="cursor-pointer w-full hover:text-white" to={'/graphicdesigning'}>
             <div>
                 <h2 className="rounded-md  text-center p-3 bg-black text-white hover:bg-lime-600 hover:text-white font-semibold">Graphic Designing</h2>
             </div>
           </Link>

       </div>

       {/* Mobile App Development Services */}
        <section className="pt-8 bg-black text-gray-600 body-font">
                <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                     
                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                        <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                          Custom Mobile App Development
                        </h1>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                          Custom mobile app development is the process of creating tailored mobile applications designed specifically to meet the unique needs, goals, and challenges of a business or individual. Unlike off-the-shelf solutions, these apps are built from scratch and are fully customizable, ensuring they align with the client’s requirements, brand identity, and target audience.
                        </p>
                     </div>
       
                     <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                        <img
                          className="object-cover object-center rounded-md"
                          alt="hero"
                          src={mobileimage1}
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
                       src={mobileimage2}
                     />
                   </div>
                   
                   <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left" data-aos="fade-up">
                     <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                        Cross-Platform App Development
                     </h1>
                     <p className="text-gray-300 mb-8 leading-relaxed">
                        Cross-platform app development is the process of building mobile applications that can run seamlessly on multiple operating systems, such as iOS, Android, and Windows, using a single codebase. This approach reduces development time, cost, and effort while ensuring consistency across platforms.
                     </p>
                   </div>
        
                </div>
            </section>

            <section className="pt-5 bg-black text-gray-600 body-font">
                <div className="contentDiv mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
                     
                     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0" data-aos="fade-up">
                        <h1 className="title-font text-lime-500 sm:text-4xl text-3xl mb-4 font-medium">
                           UI/UX Design for Mobile Apps
                        </h1>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                        UI/UX design for mobile apps focuses on creating visually appealing, user-friendly, and seamless experiences for app users. While UI (User Interface) deals with the app’s visual elements and layout, UX (User Experience) ensures that users can interact with the app effortlessly and achieve their goals effectively. A well-designed UI/UX enhances user engagement, boosts retention, and ensures customer satisfaction by making the app intuitive and enjoyable to use.
                        </p>
                     </div>
       
                     <div className="lg:w-[32vw] md:w-1/2 w-[80vw]" data-aos="fade-up">
                        <img
                          className="object-cover object-center rounded-md"
                          alt="hero"
                          src={mobileimage3}
                        />
                     </div>
       
                  </div>
              </section>

      <Footer/>
    </>
 )
}

export default MobileAppDevelopment;