import React, { useState, useContext } from "react";
import {Link} from "react-router-dom"
import Logo from '../images/logo.png'
import { FaBars } from 'react-icons/fa'
import {AiOutlineClose} from "react-icons/ai"

import { UserContext } from "../context/userContext";

const Header =() => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
    const {currentUser} = useContext(UserContext)

    const closeNavHnadler = () => {
        if(window.innerWidth < 800) {
            setIsNavShowing(false);
        }else {
            setIsNavShowing(true)
        }
    }
    return (
       <nav>
        <div className="container  nav_container">
            <Link to="/" className='nav_logo'>
            <img src={Logo} alt="Navbar Logo" />
            </Link>
            {currentUser?.id && isNavShowing && <ul className="nav_menu">
                <li><Link to="/profile/sdfsdf"onClick={closeNavHnadler}>Profile</Link></li>
                <li><Link to="/create"onClick={closeNavHnadler}>Create Post</Link></li>
                <li><Link to="/authors"onClick={closeNavHnadler}>Authors</Link></li>
                <li><Link to="/logout"onClick={closeNavHnadler}>Logout</Link></li>
            </ul>}
            {!currentUser?.id && isNavShowing && <ul className="nav_menu">
                <li><Link to="/authors"onClick={closeNavHnadler}>Authors</Link></li>
                <li><Link to="/login"onClick={closeNavHnadler}>Login</Link></li>
            </ul>}
            <button className="nav_toggle-btn"onClick={() => setIsNavShowing(!isNavShowing)}>
            {isNavShowing ? <AiOutlineClose /> : <FaBars/>}
            </button>
        </div>
       </nav>
    )
}

export default Header