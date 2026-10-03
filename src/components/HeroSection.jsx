import React from 'react'
import illustration from "../assets/Illustration.jpg"


const HeroSection = () => {
  return (
    <section className='hero-section'>
        <div className='hero-content'>
            <h1>
                Lessons And Insights
                <br/>
                <span>from 8 years</span>
            </h1>
            <p>
                Where to grow your business as a photographer:site 0r social media
            </p>
            <button className='hero-btn'>
                Register
            </button>
        </div>
        <div className='hero-image'>
            <img src={illustration} alt="" />
        </div>

    </section>
  )
}

export default HeroSection
