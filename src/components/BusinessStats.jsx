import React from 'react'
import members from "../assets/Stats/Vector.svg"
import clubs from "../assets/Stats/Icon (3).svg"
import event from "../assets/Stats/Vector (1).svg"
import payment from "../assets/Stats/Vector (2).svg"

const BusinessStats = () => {
  return (
    <section className='stats-section'>
        <div className='stats-intro'>
            <h2>
                Helping a local<br/>
                <span>business reinvent itself</span>
            </h2>
            <p>We reached here with our hardwork and dedication</p>

        </div>
        <div className='stats-grid'>
            <div className='stat-item'>
                <img src={members} alt="" />
            
                <div>
                    <h3>2,245,341</h3>
                    <p>Members</p>
                </div>
            </div>
            <div className='stat-item'>
                <img src={clubs} alt="" />
                <div>
                    <h3>46,328</h3>
                    <p>Clubs</p>
                </div>
            </div>
            <div className='stat-item'>
                <img src={event} alt="" />
                <div>
                    <h3>828,867</h3>
                    <p>Event Bookings</p>
                </div>
            </div>
            <div className='stat-item'>
                <img src={payment} alt="" />
                <div>
                    <h3>1,926,436</h3>
                    <p>Payments</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default BusinessStats
