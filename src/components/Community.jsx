import React from 'react'
import img1 from "../assets/Community/Icon.svg"
import img2 from "../assets/Community/Icon (1).svg"
import img3 from "../assets/Community/Icon (2).svg"

const Community = () => {
    return (
        <section className='community-section'>
            <div className='community-heading'>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='community-details'>
                <div className='content-box'>
                    <img src={img1} alt="" />
                    <h2>Membership organisation</h2>
                    <p>
                        Our membership management software provides
                        full automation of membership renewals and payments
                    </p>
                </div>
                <div className='content-box'>
                    <img src={img2} alt="" />
                    <h2>National Associations</h2>
                    <p>
                        Our membership management software provides full
                        automation of membership renewals and payments
                    </p>
                </div>
                <div className='content-box'>
                    <img src={img3} alt="" />
                    <h2>Clubs And Groups</h2>
                    <p>
                        Our membership management software provides
                        full automation of membership renewals and payments
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Community
