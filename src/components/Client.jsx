import React from 'react'
import logo1 from "../assets/Client/Logo.svg"
import logo2 from "../assets/Client/Logo (1).svg"
import logo3 from "../assets/Client/Logo (2).svg"
import logo4 from "../assets/Client/Logo (3).svg"
import logo5 from "../assets/Client/Logo (4).svg"
import logo6 from "../assets/Client/Logo (5).svg"
import logo7 from "../assets/Client/Logo (6).svg"

const Client = () => {
  return (
    <section className='client-section'>
        <div className='client-content'>
            <h2>Our Clients</h2>
            <p>we have been working with some Fortune 500+ clients</p>
        </div>
        <div className='client-logo'>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />

        </div>
    </section>
  )
}

export default Client
