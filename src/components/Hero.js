import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <div className="container d-flex py-5">
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?clothes,dresses" alt="Dresses"/>
             <p>Dresses</p>
        </div>
       <div className="box">
             <img src="https://source.unsplash.com/200x200/?shoes,footwares" alt="Shoes"/>
             <p>Shoes</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?glasses,gogles" alt="Glasses"/>
             <p>Glasses</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?watches" alt="Watches"/>
             <p>Watches</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?jackets,sweaters" alt="Jackets"/>
             <p>Jackets</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?laptops" alt="Laptops"/>
             <p>Laptops</p>
        </div> 
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?headphones" alt="Headphones"/>
             <p>Headphones</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?furnitures" alt="Furnitures"/>
             <p>Furnitures</p>
        </div> 
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?gadgets" alt="Gadgets"/>
             <p>Gadgets</p>
        </div>
        <div className="box">
             <img src="https://source.unsplash.com/200x200/?makeup" alt="Beauty Products"/>
             <p>Makeup Kits</p>
        </div>
    </div>
  )
}

export default Hero
