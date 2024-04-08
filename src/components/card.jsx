
import "../style/App.css"

const TestimonialCard = ()=>{
    return (
        <>
        {/* <!-- Item --> */}
       <div className="testmonail-item">
      <div className="testmonail-box bg-white p-8 relative border border-gray-300 text-left overflow-hidden mb-4">
        <div className="quote-icon absolute text-gray-400 text-3xl top-8 right-8 transform rotate-180 opacity-10">
          <i className="fas fa-quote-left"></i>
        </div>

        {/* Testmonail Image */}
        <div className="client-img inline-block mr-4 float-left">
          <img src="images/clients/person-3.jpg" alt="Client" className="rounded-full h-16 w-16" />
        </div>

        <div className="author-details float-left">
          <h6 className="text-gray-700 uppercase text-sm font-semibold pt-1 leading-5">Rabie Elkheir</h6>
          <span className="text-gray-600 text-xs font-semibold leading-4">UI/UX Designer</span>
        </div>

        <div className="clearfix"></div>

        <div className="inner-test mt-5">
          <p className="text-gray-600 text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
       </div>
       {/* mamba ui */}
       {/* <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio Animi</p>
				<p className="text-sm uppercase">Aliquam illum</p>
			      </div>
        </div> */}
        {/* mamba end */}
        </>
    )
}
export default TestimonialCard;