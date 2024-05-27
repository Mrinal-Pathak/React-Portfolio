import React, { useState } from 'react'
import '../css/Navbar.css'



const Navbar = function () {
    const [navOpen, setNavOpen] = useState(false)
    const handleNavbar = function () {
        setNavOpen(!navOpen)
        if (navOpen) {
            document.getElementById("navBar").style.flexDirection = "row";
            document.getElementsByTagName("nav")[0].style.flexDirection = "row";
            let elements = document.getElementsByClassName("navItems");
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            let elements = document.getElementsByClassName("navItems");
            document.getElementById("navBar").style.flexDirection = "column";
            document.getElementsByTagName("nav")[0].style.flexDirection = "column";
            for (let i = 0; i < 4; i++) {
                elements[i].style.display = "block";
            }
        }
    }

    const navStyleChange = function (id) {
        let elements = document.getElementsByClassName("navItems");
        for (let i = 0; i < elements.length; i++) {
            if (i === id) {
                elements[i].classList.add("active");
            } else {
                elements[i].classList.remove("active");
            }
        }
    };

    return (
        <>
            <nav>
                <div className='navbarIcon' onClick={handleNavbar}>
                    <div className="iconLines"></div>
                    <div className="iconLines"></div>
                    <div className="iconLines"></div>
                </div>
                <ul style={{ fontSize: "1.05rem" }} className='navbar' id='navBar'>
                    <a href="#home"><li id="navHome" onClick={() => navStyleChange(0)} className='navItems active'>Home</li></a>
                    <a href="#project"><li id="navProject" onClick={() => navStyleChange(1)} className='navItems'>Projects</li></a>
                    <a href='/resume.pdf' download="Mrinal-Resume.pdf"><li className='navItems'>Resume</li></a>
                    <a href="#contact"><li id="navContect" onClick={() => navStyleChange(3)} className='navItems'>Contact</li></a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar