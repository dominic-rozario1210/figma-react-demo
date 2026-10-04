import React from 'react'
import image1 from "../assets/Marketing/image 18 (1).jpg"
import image2 from "../assets/Marketing/image 19.png"
import image3 from "../assets/Marketing/image 20.png"

const Marketing = () => {
  return (
    <section className='marketing-section'>
        <div className='marketing-content'>
            <h4>
                Caring is the new marketing
            </h4>
            <p>
                The Nextcent blog is the best place to read
                about the latest membership insights, trends and more.
                See who's joining the community, read about how our community
                are increasing their membership income and lot's more.​
            </p>

        </div>
        <div className='marketing-card-section'>
            <div className='marketing-card'>
                <img src={image1} alt="" />
                <div className='inner-card'>
                    <h5>Creating Streamlined Safeguarding Processes with OneRen</h5>
                    <p>Readmore ➜</p>
                </div>
            </div>
            <div className='marketing-card'>
                <img src={image2} alt="" />
                <div className='inner-card'>
                    <h5>What are your safeguarding responsibilities and how can you manage them?</h5>
                    <p>Readmore ➜</p>
                </div>
            </div>
            <div className='marketing-card'>
                <img src={image3} alt="" />
                <div className='inner-card'>
                    <h5>Revamping the Membership Model with Triathlon Australia</h5>
                    <p>Readmore ➜</p>
                </div>
            </div>
            

        </div>
    </section>
  )
}

export default Marketing
