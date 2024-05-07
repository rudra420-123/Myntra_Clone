import React from 'react'
import "./Navbar.css"
function Navbar() {
    return ( 
        <div className="navbar">
            <div className="container d-flex">
                <div className="logo d-flex">
                    <i className="fa-solid fa-bars px-4"></i>
                    <h4>Myntra</h4>
                </div>
                <ul>
                    <li><i className="fa-regular fa-square-plus"></i></li>
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="fa-regular fa-heart"></i></li>
                    <li><i className="fa-solid fa-bag-shopping"></i></li>
                </ul>
           </div>
        </div>
    )
}

export default Navbar