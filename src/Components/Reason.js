import React, { Fragment } from 'react'
import './Scss/Reason.scss'
import { GrCloudSoftware } from 'react-icons/gr'
import { Reasondata } from './Data/Data'



const Reason = () => {
    return (
        <Fragment>
            <div className='reason-parent'>
                <div>
                    <center><h1> Why Choose <b style={{ color: '#2EDAF1' }}> Devtron  ?</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
                    </center>
                </div>

                {/* CARDS SECTION START HERE */}


                <div className='parent-card'>
                    
                          {/* {
                            Reasondata.map((map)=>{
                                return(
                                    <div className='card'>
                                    <div className='icons'>
                                        <span><GrCloudSoftware /></span>
                                    </div>
                                    <h1>
                                        Easy Integration</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua
                                    </p>
                                </div>
                                )
                            })
                          } */}
                    
                </div>
            </div>

        </Fragment>
    )
}

export default Reason