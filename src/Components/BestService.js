import React, { useState } from 'react'
import '.././Components/Scss/BestService.scss'
import { bestservices } from './Data/Data'
const BestService = () => {

    const [fix, setFix] = useState(false)
    const fixedsidebar = () => {
        if (window.screenY <= 500) {
            setFix(true)
        }
        else {
            setFix(false)
        }
    }
    window.addEventListener('scroll', fixedsidebar)
    return (
        <div className='best-services-main-parent'>

            <div className='best-services-parent'>
                <div className='services-detail'>
                    <aside className={fix ? 'sidebar fixed' : 'sidebar'}>
                        <h1>Explore Best </h1>
                        <h1 className='second'>AI Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor</p>
                        <button className='all-service'>All Services</button>
                    </aside>
                </div>
                <div className='service-card'>
                    {
                        bestservices.map((map) => {
                            return (
                                <div className='services-img'>
                                    <img src="./images/20.jpg" alt="" />
                                    <div className="content">
                                        <div className='text'>
                                            <h1>
                                                Machine Learning</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, minus.</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BestService