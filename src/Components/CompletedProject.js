import React from 'react'
import './/Scss/CompleteProject.scss'
import { workproject } from './Data/Data'
import {AiOutlineArrowRight} from 'react-icons/ai'
const CompletedProject = () => {
    return (
     <div className='main-parent-completedprojects'>
           <div className='complete-project-parent'>
            <div className='text'>
                <h1>Take A Look At Our <b>Completed Projects</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div className='work-images'>
             {
                workproject.map((map)=>{
                    return(
                        <div className='work'>
                        <img src={map.img}alt=""  width={'100%'}/>
                        <div className="details">
                            <h3>
                              {map.h3}
                            </h3>
                            <p>
                                {map.p}
                            </p>
                            <div className='icon-deiv'>
                                <span>{map.h5}</span>
                                <span className='icons'><AiOutlineArrowRight/></span>
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

export default CompletedProject