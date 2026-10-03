import React from 'react'
import image from "../assets/Testimonal/image 9.png"
import logo1 from "../assets/Client/Logo.svg"
import logo2 from "../assets/Client/Logo (1).svg"
import logo3 from "../assets/Client/Logo (2).svg"
import logo4 from "../assets/Client/Logo (3).svg"
import logo5 from "../assets/Client/Logo (4).svg"
import logo6 from "../assets/Client/Logo (5).svg"

const TestimonialSection = () => {
  return (
    <section className='testimonal-section'>
        <div className='customer-image'>
            <img src={image} alt="" />

        </div>
        <div className='testimonal-content'>
            <div className='testimonal-text'>
                <p>
                    Maecenas dignissim justo eget nulla rutrum molestie.
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                    Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim.
                    Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                    nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
                    quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. 
                    Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. 
                    Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id 
                    sem dignissim finibus ac sit amet magna.
                </p>
            </div>
            <div className='testimonal-name'>
                <h4>
                   Tim Smith
                </h4>
                <p>
                  British Dragon Boat Racing Association
                </p>
            </div>
            <div className='customer-logos'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <div className='meet-customers'>
                    <h4>Meet All customer ➜</h4>

                </div>
            </div>

        </div>
    </section>
  )
}

export default TestimonialSection
