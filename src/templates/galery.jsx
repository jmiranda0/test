import "../style/galery.css";

const Galery = ()=>{
    return(
        <>
            <section className="container sm:pt-4 sm:pb-4">
                <h2 className="pt-2 pb-2 gal-text capitalize text-center sm:text-4xl ">Have a Look at My Work</h2>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <div className="flex flex-wrap gap-2">
                            {/* <img src="images/clients/person-2.jpg" alt="" /> */}
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                            <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/clients/person-2.jpg" alt="" />
                            <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                            </div>
                            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                            </div>
                        </picture>
                           {/*  <img src="images/blog/blog-2.jpg" alt="" /> */}    
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                                <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/blog/blog-2.jpg" alt="" />
                                <div className="absolute inset-x-5 bottom-6">    
                                        <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">    
                                        <p className="text-xl text-gray-100">Beyond Builder</p>
                                    </div>
                                </div>
                        </picture>
                            {/* <img src="images/header/header.jpg" alt="" /> */}
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                            <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/header/header.jpg" alt="" />
                            <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                            </div>
                            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                            </div>
                        </picture>
                    </div>
                    <div className="flex flex-wrap-reverse gap-2">
                        {/* <img src="images/clients/person-2.jpg" alt="" /> */}
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                            <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/clients/person-2.jpg" alt="" />
                            <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                            </div>
                            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                            </div>
                        </picture>
                           {/*  <img src="images/blog/blog-2.jpg" alt="" /> */}    
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                                <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/blog/blog-2.jpg" alt="" />
                                <div className="absolute inset-x-5 bottom-6">    
                                        <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                                <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                    <div className="absolute inset-x-5 bottom-6">    
                                        <p className="text-xl text-gray-100">Beyond Builder</p>
                                    </div>
                                </div>
                        </picture>
                            {/* <img src="images/header/header.jpg" alt="" /> */}
                        <picture className="group relative cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                            <img className="object-cover transition-all group-hover:rotate-12 group-hover:scale-150" src="images/header/header.jpg" alt="" />
                            <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                            </div>
                            <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                                <div className="absolute inset-x-5 bottom-6">    
                                    <p className="text-xl text-gray-100">Beyond Builder</p>
                                </div>
                            </div>
                        </picture>                    
                    </div>
                    
                </div>
            </section>
        </>
    )
}
export default Galery;