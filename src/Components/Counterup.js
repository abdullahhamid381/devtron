import React, { useState, useEffect, useRef } from 'react'
import { FaPlay } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import './Scss/Counterup.scss'
import { cardservices } from './Data/Data'


const Counterup = ({ start = 0, end, starttwo = 0, endtwo, }) => {
    const [valuetwo, setValuetwo] = useState(null)



    // COUNTERUP LOgiC StARt HERE

    const [value, setValue] = useState(null)
    const ref = useRef(start)

    const counter = end / 200;

    const Count = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + counter);
            if (result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(Count, 20)
    }
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            Count();
        }
        return () => (isMounted = false);
    },
        [end]
    );



    const rafc = useRef(starttwo)

    const countertwo = endtwo / 200;

    const Counttwo = () => {
        if (rafc.current < endtwo) {
            const resulttwo = Math.ceil(rafc.current + countertwo);
            if (resulttwo > endtwo) return setValuetwo(endtwo);
            setValuetwo(resulttwo);
            rafc.current = resulttwo;
        }
        setTimeout(Counttwo, 200)
    }
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            Counttwo();
        }
        return () => (isMounted = false);
    },
        [endtwo]
    );
    // COUNTERUP LOgiC END HERE




    return (
        <div className="reason-parent">
            {/* CARD SECTION START HERE */}

            <div>
                <center><h1> Why Choose <b style={{ color: '#2EDAF1' }}> Devtron  ?</b></h1>
                    <p className='reason-detail-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
                </center>
            </div>

            {/* COUNTER DETAiL SECtiON StArt\ HERE */}

             <div className='counter-parent'>

                <div className='counter-detail'>
                    {/* <p className='welcome'>Welcome to Devtron</p> */}
                    <h1>
                        Let Us Be Your <br /> <b style={{ color: "#2EDAF1", marginTop: '10px' }}>IT Partner</b>
                    </h1>

                    <p className='para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis faucibus ligula. Maecenas a purus massa. Ut elementum sem.
                    </p>
                </div>

                {/* COUNTER NUMBER SECTION START HERE */}

                <div className='counter-number'>
                    <div>
                        <center>
                            <span style={{}}>{value} +  </span>
                            <p>Project Completed</p>
                        </center>
                        <center>
                            <span style={{}}>{valuetwo} + </span>
                            <p>Years of Experiences</p>
                        </center>
                    </div>
                    <div class="video">
                        {/* <div class="play-btn">
                            <FaPlay />
                        </div> */}
                        <img src="./images/17.jpg" alt="" />

                    </div>
                </div>

            </div> 

            <div className='cards-parent'>
                {
                    cardservices.map((map) => {
                        return (
                            <div className="cards">
                                <div>
                                    <img src={map.img} alt="" width={'30%'} />
                                    <h3>
                                        {map.h3}
                                    </h3>
                                    <p>
                                        {map.p}
                                    </p>

                                    <span><BsArrowRight /></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Counterup