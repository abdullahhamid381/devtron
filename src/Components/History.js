import React, { useEffect, useState, useRef } from 'react'
import './Scss/History.scss'
const History = ({ start = 0, end, starttwo = 0, endtwo,startthree = 0, endthree, }) => {

    const [valuetwo, setValuetwo] = useState(null)
    const [valuethree, setValuethree] = useState(null)
    const [valuefour, setValuefour] = useState(null)



    // COUNTERUP LOgiC StARt HERE

// FIRST HERE

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

    // SECOND START <HERE></HERE>

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

    // THREE START |FROM HERE


 const three = useRef(startthree)

    const counterthree = endthree / 200;

    const Countthree = () => {
        if (three.current < endthree) {
            const resultthree = Math.ceil(rafc.current + counterthree);
            if (resultthree > endthree) return setValuethree(endthree);
            setValuethree(resultthree);
            rafc.current = resultthree;
        }
        setTimeout(Countthree, 20)
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



    // COUNTERUP LOgiC END HERE


    return (
        <div className='counter-number'>
            <div>

                <div>
                    <span style={{}}>{value} +  </span>
                    <p>Project Completed</p>
                </div>


                <div>
                    <span style={{}}>{valuetwo} + </span>
                    <p>Years of Experiences</p>
                </div>
                <div>
                    <span style={{}}>{valuethree} + </span>
                    <p>Years of Experiences</p>
                </div>

            </div>

        </div>
    )
}

export default History