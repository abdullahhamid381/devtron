import React,{useState,useEffect,useRef} from 'react'

const Counterup = ({start=0,end}) => {
    const [value, setValue] = useState (null)
    const ref =useRef(start)

const counter = end / 200;

const Count = ()=>{
    if(ref.current<end){
        const result = Math.ceil(ref.current+counter);
        if (result > end)return setValue(end);
        setValue(result);
        ref.current=result;
    }
    setTimeout(Count,20)
}
useEffect(()=>{
    let isMounted=true;
    if(isMounted){
        Count();
    }
    return()=>(isMounted = false);
},
[end]
);

  return (
    <div>
        <h1 style={{color:'white'}}>{value}+</h1>
    </div>
  )
}

export default Counterup