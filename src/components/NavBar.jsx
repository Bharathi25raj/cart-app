import React from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";



function NavBar(){

    const { count } = useContext(ProductContext);

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