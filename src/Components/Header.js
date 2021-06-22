import logo from "./logo.png"

import {
  Link
} from "react-router-dom";

const Header =()=> {
    return(
       <div className="header">
            <section className="logo"> 
            <Link to="/"><img src= {logo}/> </Link>
            </section>
            <ul>
                <li> <Link to="/work">WORK</Link> </li>
                <li> <Link to="/about">ABOUT</Link> </li>
                <li> <Link to="/shop">SHOP</Link> </li>
                 <li> <Link to="/contact">CONTACT</Link> </li>
             </ul>
        </div>

)
}

export default Header