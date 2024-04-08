/* 
    ==================================================================== 
                                Start Section About
    ====================================================================
*/

import "../style/about.css"
import "../style/App.css"
const About = ()=>{
    return(
        <>
        <section id="about" className="about pt-2 pb-4 sm:pt-8 sm:pb-8 h-screen ">
            <div className="container">
            
                <div className="flex flex-col pb sm:flex-row">
                    <div className="mb-4 sm:pl-4 sm:pr-4">
                        <div className="about-img ">
                            <div className="box-img">
                                <img src="images/about/about.jpg" alt="About-me"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="info-about">
                            {/* Title Of Section Left */}
                            <div className="section-title-left text-customDarkGray1">
                                <h2 className="text-3xl lg:text-4xl">Soy Nour Eldin</h2>
                                <h3 className="text- lg:text-xl mt-2">
                                    SOY UN FOTÓGRAFO CREATIVO CON UN ESTILO DISTINTIVO.
                                </h3>
                            </div>

                            <p className="text-base lg:text-lg mt-4 mb-3">
                            ¡Hola! Soy Nour Eldin, un amante de la fotografía con una pasión por capturar momentos especiales y crear recuerdos duraderos. 
                            Desde muy joven, he sentido una conexión profunda con el arte de la fotografía y he dedicado tiempo y esfuerzo a perfeccionar mis habilidades en este campo.
                            </p>
                            <div className="relative ml-6 before:absolute before:h-full before:w-full before:-left-3 before:-bottom-3 before:content[' '] before:bg-customGray">
                                <div className="p-7 pt-5 mb-10 border-1 bg-slate-50 border-l-slate-600 grid grid-flow-row gap-4 sm:grid-cols-2 box-img">
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Name: <span className="font-normal pl-1 text-gray-800">Nour Eldin</span>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Age: <span className="font-normal pl-1 text-gray-800">25</span>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Phone: <span className="font-normal pl-1 text-gray-800">+011 499 123 18</span>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Address: <span className="font-normal pl-1 text-gray-800">New York, USA</span>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Freelance: <span className="font-normal pl-1 text-gray-800">Available</span>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-sm lg:text-base font-semibold capitalize text-black">
                                        Nationality: <span className="font-normal pl-1 text-gray-800">American</span>
                                    </p>
                                    </div>
                                </div>
                            <span className="icon-bg"><i className="far fa-address-book"></i></span>
                            </div>

                            <div className="follow-me">
                            <p className="text-lg">Follow Me:</p>
                            <ul className="social-media-about">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
        </>
    )
}
export default About;