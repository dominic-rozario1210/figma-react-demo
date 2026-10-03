import React from 'react'
import Icon from "../assets/Icon.jpg";

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={Icon} alt="" className='logo-icon'/>
            <span className='logo-text'>Nexcent</span>
        </div>
        <nav className='right-menu'>
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Community</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <button className='header-btn'>Register Now →</button>
            
        </nav>
        
    </header>
  )
}

export default Header
