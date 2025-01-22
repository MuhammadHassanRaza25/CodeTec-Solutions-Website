import { PiHandArrowUpFill } from "react-icons/pi";
import webdesigning from "../assets/Images/webdesigning.png"
import softwaredevelopment from "../assets/Images/softwaredevelopment.png"
import uiuxdesigning from "../assets/Images/uiuxdesigning.jpg"
import webdevelopment from "../assets/Images/webdevelopment.jpg"
import uiuxdesigning2 from "../assets/Images/uiuxdesigning2.jpg"
import desktopappdevelopment from "../assets/Images/desktopappdevelopment.jpg"
import { Link } from "react-router";

function Services(){
    return(
        <>
        <h1 className="pt-10 flex items-center gap-3 justify-center font-semibold text-lime-500 bg-black text-4xl">OUR SERVICES <PiHandArrowUpFill /></h1>
        
        <section className="bg-black text-gray-600 body-font">
            
            {/* First Row */}
            <div className="container px-12 pt-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                
                <div className="card p-4 md:w-1/3">
                  <div className="h-full border-opacity-60 overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={webdesigning}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semibold itle-font text-xl  text-lime-500 mb-3">
                         Web Designing
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                         Web designing involve creating customized, responsive, and visually appealing websites to enhance user experience and support business goals.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-4 md:w-1/3">
                  <div className="h-full border-opacity-60 overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={softwaredevelopment}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semibold title-font text-xl text-lime-500 mb-3">
                         Software Development 
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Software development provide custom solutions by designing, building, testing, and maintaining software to meet specific business needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-4 md:w-1/3">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={uiuxdesigning}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semiboldtitle-font text-xl font-medium text-lime-500 mb-3">
                        UI/UX Designing
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                         UI/UX designing focus on creating intuitive interfaces and seamless user experiences, enhancing usability and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
            
            {/* Second Row */}
            <div className="container px-12 pt-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                
                <div className="card p-4 md:w-1/3">
                  <div className="h-full border-opacity-60 overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={webdevelopment}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semibold itle-font text-xl  text-lime-500 mb-3">
                         Web Development
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                         Elevate your online presence with our custom web development. We craft tailored solutions for performance and user engagement. Contact us today.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="card p-4 md:w-1/3">
                  <div className="h-full overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={uiuxdesigning2}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semiboldtitle-font text-xl font-medium text-lime-500 mb-3">
                        UI/UX Designing
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        We conceptualize and design interfaces that not only enhance user experiences but also leave a lasting impact on your target audience. Let’s create a digital experience that truly stands out.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-4 md:w-1/3">
                  <div className="h-full border-opacity-60 overflow-hidden">
                    <img
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={desktopappdevelopment}
                      alt="services"
                    />
                    <div className="pt-5 px-2">
                      <h1 className="font-semibold title-font text-xl text-lime-500 mb-3">
                         Desktop App Development 
                      </h1>
                      <p className="text-gray-300 leading-relaxed mb-3">
                         Boost productivity with tailored desktop apps. We deliver performance, security, and user-friendly design. Contact us today.
                      </p>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="text-center mt-10">
              <Link to={'/allservices'}>
                 <button className="inline-flex text-lg font-semibold bg-lime-600 hover:bg-lime-500 text-white px-8 py-2 rounded-md">View All</button>
               </Link>
            </div>

       </section>


       </>
    )
}

export default Services;