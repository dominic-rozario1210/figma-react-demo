import React from 'react'
import Icon from "../assets/Footer/Icon.svg"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-left-side'>
            <div className='footer-head-icon'>
                <img src={Icon} alt="" />
                <h2>Nexcent</h2>
            </div>
            <div className='footer-para'>
                <p>Copyright © 2020 Landify UI Kit.</p>
                <p>All rights reserved</p>
            </div>
            <div className='footer-logo'>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-chrome"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-square-youtube"></i>
            </div>

        </div>
        <div className='footer-right-side'>
            <div className='footer-company'>
                <h3>Company</h3>
                <p>About us</p>
                <p>Blog</p>
                <p>Contact us</p>
                <p>Pricing</p>
                <p>Testimonal</p>
            </div>
            <div className='footer-company'>
                <h3>Support</h3>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
            </div>
            <div >
                <h3>Stay up to date</h3>
                <div className='footer-email'>
                   <p>Your email address</p>
                   <i class="fa-regular fa-paper-plane"></i>
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer
