import React from 'react'
import img from "../assets/FooterDesign/pana.jpg"
const FooterDesign = () => {
  return (
    <section className='footer-design-section'>
        <div className='footer-design-image'>
            <img src={img} alt="" />

        </div>
        <div className='footer-design-content'>
            <h3>
               How to design your site footer like we did
            </h3>
            <p>
                Donec a eros justo. Fusce egestas tristique ultrices.
                Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                non aliquet urna tincidunt. Integer in nisi eget nulla commodo 
                faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
                 hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.

            </p>
            <button>
                Learn More
            </button>

        </div>
    </section>
  )
}

export default FooterDesign
