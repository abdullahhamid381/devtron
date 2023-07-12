import React from 'react'
import './/Scss/TrustedCompany.scss'
const TrustedCompany = () => {
    return (
       <div className='trusted-main-parent'>
         <div className='trusted-parent'>
            <div className='company-logo'>
                <div className='text'>
                    <h3>
                        Trusted By <br /> <b>Big Companies</b></h3>
                </div>

                <div className='logo-img'>
                <img src="./images/10.png" alt="" />
                <img src="./images/11.png" alt="" />
                <img src="./images/13.png" alt="" />
                <img src="./images/14.png" alt="" />
                </div>

            </div>

            <div className='detail'>
                <div className='img-div'>
                    <img src={'./images/17.jpg'} alt="" />
                </div>
                <div className='title'>
                    <h1>
                        Transform Your Business <br /> With 
                        <b> AI Technology</b>
                    </h1>

                    <div className='para'>
                        <div className='para-button'>
                            <p>
                                Lorem veniam, quis nostrud exercitation ullamco laboris. Sed uteniri perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium
                                <br />
                                <button>Learn More</button>
                            </p>
                        </div>
                        <div className='img-sub'>
                            {/* <img src={'./images/16.jpg'} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default TrustedCompany