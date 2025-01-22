import { Link } from "react-router";
import codetecsolutionsLogo from "../assets/Images/codetecsolutionsLogo.jpg"

function Footer(){
    return(
      <>
        <footer className="mt-24 border-t bg-black text-gray-600 body-font">
            <div className="px-20 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              
              <div className="w-64 flex-shrink-0 md:mx-0 md:text-left">
                <span><img width={'180px'} src={codetecsolutionsLogo} alt="codetec solutions logo" /></span>
                <p className="mt-2 text-sm text-gray-300 p-2">
                  CodeTec Solutions is an innovative, reliable, and user-focused digital solutions company delivering scalable, modern, and impactful projects.
                </p>
              </div>

              <div className="flex-grow flex flex-wrap justify-around md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
                
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-bold text-gray-100 tracking-widest text-xl mb-3">
                    PRODUCTS
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to={'/allservices'}><a className="text-gray-300 hover:text-lime-500">Software Development</a></Link>
                    </li>
                    <li>
                      <Link to={'/mobileappDevelopment'}><a className="text-gray-300 hover:text-lime-500">Mobile App Development</a></Link>
                    </li>
                    <li>
                      <Link to={'/ecommerce'}><a className="text-gray-300 hover:text-lime-500">E-commerce</a></Link>
                    </li>
                    <li>
                      <Link to={'/graphicdesigning'}><a className="text-gray-300 hover:text-lime-500">Graphic Designing</a></Link>
                    </li>
                  </nav>
                </div>

                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-100 tracking-widest text-xl mb-3">
                    ABOUT
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to={'/about'}><a className="text-gray-300 hover:text-lime-500">About</a></Link>
                    </li>
                    <li>
                    <Link to={'/contact'}><a className="text-gray-300 hover:text-lime-500">Contact</a></Link>
                    </li>
                  </nav>
                </div>

                <div className="lg:w-96 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-100 tracking-widest text-xl mb-3">
                    DETAILS
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-300 hover:text-lime-500">3998 E 71st street, Cleveland, Ohio</a>
                    </li>
                    <li>
                      <a className="text-gray-300 hover:text-lime-500">Email: contact@codetecsolutions.com</a>
                    </li>
                    <li>
                      <a className="text-gray-300 hover:text-lime-500">Contact: +15128801171</a>
                    </li>
                    <li>
                      <a className="text-gray-300 hover:text-lime-500">Timing: 10:00am - 8:00pm</a>
                    </li>
                  </nav>
                </div>

              </div>

            </div>

            <div className="bg-gray-100">
              <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="font-semibold text-gray-900 text-sm text-center sm:text-left">
                  © All rights reserved to CodeTec Solutions
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>

        </footer>
      </>
    )
}

export default Footer;