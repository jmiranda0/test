
import "../style/hero.css";
/*  ==================================================================== 
							    Hero 
	==================================================================== */
   
const Hero = ()=>{
    return (
        <>
            <section className="hero relative w-full bg-slate-500 bg-cover bg-center">
                <div className="hero-content text-white w-full h-full flex flex-col justify-center items-center">
                    <h1 className="pb-7 flex flex-col container sm:before:content-['_'] sm:pl-16">
                       <span>Hero section</span>
                       <div className="flex flex-col sm:flex-row sm:gap-4"><span>ver que poner </span>NombreE</div>
                       <span>Poner algo mas?</span>                     
                    </h1>
                    <a className="text-2xl py-2 px-6 border border-white uppercase hover:bg-slate-300 hover:bg-cover hover:text-gray-500" href="/gallery">Gallery </a>
                </div>
                
            </section>
        </>
    ) 
}
export default Hero;
    