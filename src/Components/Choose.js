import React, { useRef, useState } from "react";
import './Scss/Choose.scss'
import { cardsprovide } from "./Data/Data";

const Choose = () => {

    return (
        <div className="choose-parent">
            <div className="title">

                <h1>Why Choose <span>Artifice ?</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua enim ad minim veniam
                </p>

            </div>
       <div className="card-parent">
    {
        cardsprovide.map((item)=>{
            return(
                <div className="card">
                <div className="icon">
                    <span>{item.icon}</span>
                </div>
             <div className="text">
             <h1>
                  {item.h1}
                </h1>
                <p>{item.p}</p>
             </div>
            </div>
            )
        })
    }
       </div>
        </div>
    )
}

export default Choose