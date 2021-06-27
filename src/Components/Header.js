import logo from "./logo.png"

import {
  Link
} from "react-router-dom";

const Header =()=> {
    return(
       <div className="header">
            <ul>
                <li> <Link to="/">HOME</Link> </li>
                <li> <Link to="/work">WORK</Link> </li>
                <li> <Link to="/shop">SHOP</Link> </li>
                 <li> <Link to="/contact">CONTACT</Link> </li>
             </ul>
             
        </div>

)
}

export default Header