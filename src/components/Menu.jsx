import React, { useEffect } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import logo from '../assets/home/logo.svg'

function Menu() {
    var location = useLocation();
    useEffect(() => {
        document.querySelectorAll('.navbar-active').forEach((item) => {
            item.classList.remove('navbar-active')
        })
        document.getElementById(location.pathname).classList.add('navbar-active') 
    }, [location])
    console.log(location.pathname)
    return (
        <header className="menu" id="menu">
            <div className="logo">
                <img src={logo} alt=""></img>
                <div className="logo-text">
                    <h2 className="logo-top-text">Dawid</h2>
                    <h2 className="purple-accent">Komęza</h2>
                </div>
            </div>
            <div className="navbar">
                <div className="navbar-button-container" id='/'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className="navbar-button-container" id='/about-me'>
                    <Link to={'/about-me'}>About Me</Link>
                </div>
                <div className="navbar-button-container" id='/projects'>
                    <Link to={'/projects'}>Projects</Link>
                </div>
                <div className="navbar-button-container" id='/contact'>
                    <Link to={'/contact'}>Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Menu