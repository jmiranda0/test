import About from "../templates/about"
import Hero from "../templates/hero"

import Galery from "../templates/galery"
import Hr from "../components/hr"


function Landing() {
    return (
      <>
        <Hero/>
        <Galery/>
        <Hr/>
        <About/>
        
      </>
    )
  }
  
  export default Landing