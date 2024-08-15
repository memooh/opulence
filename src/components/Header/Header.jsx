import React from 'react'
import './Header.css'
import Logo from '/images/logo.png'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" height="30" />
        </a>
            <span className="logoText">OPULENCE </span>
        <button 
          className={`navbar-toggler ${isOpen ? 'active' : ''}`} 
          type="button" 
          onClick={toggle}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${isOpen ? 'active' : ''}`}></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/about">About Us</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/services">Services</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/projects">Projects</a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link" href="/pricing">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
