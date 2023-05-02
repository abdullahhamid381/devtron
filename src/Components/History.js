import React, { useEffect, useState, useRef } from 'react'
import './Scss/History.scss'
const History = ({ start = 0, end, starttwo = 0, endtwo, startthree = 0, endthree, startfour = 0, endfour, }) => {

    const [valuetwo, setValuetwo] = useState(null)
    const [valuethree, setValuethree] = useState(null)
    const [valuefour, setValuefour] = useState(null)



    // COUNTERUP LOgiC StARt HERE




    // -------------------------------------------------------// FIRST HERE-------------------------------------------------------------

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



    //----------------------------------------------------- SECOND START <HERE></HERE>---------------------------------------------------------

    const rafc = useRef(starttwo)

    const countertwo = endtwo / 200;

    const Counttwo = () => {
        if (rafc.current < endtwo) {
            const resulttwo = Math.ceil(rafc.current + countertwo);
            if (resulttwo > endtwo) return setValuetwo(endtwo);
            setValuetwo(resulttwo);
            rafc.current = resulttwo;
        }
        setTimeout(Counttwo, 50)
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

    //------------------------------------ THREE START |FROM HERE ------------------------------------


    const three = useRef(startthree)

    const counterthree = endthree / 200;

    const Countthree = () => {
        if (three.current < endthree) {
            const resultthree = Math.ceil(rafc.current + counterthree);
            if (resultthree > endthree) return setValuethree(endthree);
            setValuethree(resultthree);
            rafc.current = resultthree;
        }
        setTimeout(Countthree, 500)
    }
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            Countthree();
        }
        return () => (isMounted = false);
    },
        [endthree]
    );

    //------------------------------------ Four START |FROM HERE ------------------------------------


    const four = useRef(startfour)

    const counterfour = endfour / 200;

    const Countfour = () => {
        if (four.current < endfour) {
            const resultfour = Math.ceil(rafc.current + counterfour);
            if (resultfour > endfour) return setValuefour(endfour);
            setValuefour(resultfour);
            rafc.current = resultfour;
        }
        setTimeout(Countfour, 150)
    }
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            Countfour();
        }
        return () => (isMounted = false);
    },
        [endfour]
    );



    // COUNTERUP LOgiC END HERE


    return (
        <div className='counter-number'>
            <div className='counter-number-parent-sub'>

                <div className='counter-item' style={{ borderRight: '1px solid rgba(255, 255, 255, 0.141)' }}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <span style={{}}>{value} +  </span>
                        <p>Project Completed</p>
                    </div>
                </div>


                <div className='counter-item' style={{ borderRight: '1px solid rgba(255, 255, 255, 0.141)' }}>
                    <span style={{}}>{valuetwo} + </span>
                    <p>Years of Experiences</p>
                </div>



                <div className='counter-item' style={{ borderRight: '1px solid rgba(255, 255, 255, 0.141)' }}>
                    <span style={{}}>{valuethree} + </span>
                    <p>Years of Experiences</p>
                </div>

                <div className='counter-item'>
                    <span style={{}}>{valuefour} + </span>
                    <p>Years of Experiences</p>
                </div>


            </div>

        </div>
    )
}

export default History