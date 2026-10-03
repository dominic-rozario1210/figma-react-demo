import React from 'react'
import img from "../assets/Business/Frame 35.png"

const BusinessSection = () => {
    return (
        <section className='business-section'>
            
                <div className='box-image'>
                    <img src={img} alt="" />
                </div>
                <div className='right-side'>
                    <h2>The Unseen of spending three years at Pixelgrade</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed accumsan quam vitae est varius
                        fringilla. Pellentesque placerat vestibulum lorem sed porta.
                        Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus
                        pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
                        tempus sem. Donec elementum pulvinar odio.
                    </p>
                    <button>Learn More</button>
                </div>

        </section>
    )
}

export default BusinessSection
