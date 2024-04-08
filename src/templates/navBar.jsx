/* ==================================================================== 
						                  Navbar      
   ====================================================================
*/
import "../style/App.css"
const NavBar = ()=>{
    return(
        <>
        <nav>
          <ul className="flex flex-row items-center bg-customDarkGray1 gap-1 h-12">
            <li><a href="#">ahome</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">service</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
        </>
    )
}
export default NavBar;
    