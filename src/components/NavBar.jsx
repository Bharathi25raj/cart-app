import React from "react";
import { Link } from "react-router-dom";




function NavBar({count}){
    return (
         <div className="navbar">
            <span>Redux Store</span>
            <div className="navLinks">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/cart">Cart</Link>
                <span className="cartCount">CART ITEMS: {count}</span>
            </div>
        </div>
        
    )
}

export default NavBar;