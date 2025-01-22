import Footer from "./Footer";
import Header from "./Header";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'

function Contact() {

  useEffect(()=>{
        Aos.init();
  },[])

    return(
        <>
        <Header/>

        <section className="text-gray-600 body-font relative" data-aos="fade-right">
            <div className="px-16 pt-20 pb-16 mx-auto flex">
              <div className="lg:w-full md:w-1/2 border  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className="text-gray-100 text-5xl mb-1 font-medium title-font">
                  Get In Touch
                </h2>
                <p className="text-lg px-1 pt-2 leading-relaxed mb-5 text-gray-300">
                   Leave us a message
                </p>
                <div className="relative mb-4 mt-2">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className="placeholder:text-gray-600 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="contact@company.com"
                    className="placeholder:text-gray-600 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write Your Message Here"
                    className="placeholder:text-gray-600 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
                <button className="text-center text-lg font-semibold bg-lime-600 hover:bg-lime-500 text-white px-8 py-2 rounded-md">
                  Send Message
                </button>
              </div>
            </div>
         </section>

        <Footer/>
      </>
    )
}

export default Contact;