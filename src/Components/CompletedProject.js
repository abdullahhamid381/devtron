import React from 'react'
import './/Scss/CompleteProject.scss'
const CompletedProject = () => {
    return (
        <div className='complete-project-parent'>
            <div className='text'>
                <h1>Take A Look At Our <b>Completed Projects</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='work-images'>
                <div>
                <img src={'./images/16.jpg'} alt="" />
                
                </div>
                <img src={'./images/17.jpg'} alt="" />
            </div>
        </div>
    )
}

export default CompletedProject