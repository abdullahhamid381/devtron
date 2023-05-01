import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Reuseable/Slider'

import Counterup from './Components/Counterup'
import TrustedCompany from './Components/TrustedCompany'
import CompletedProject from './Components/CompletedProject'
import Reviews from './Components/Reviews'
import BestService from './Components/BestService'

const App = () => {
  return (
    <div>
      {/* <Navbar/>
    <Slider/> */}

    <Counterup start={0} end={500} starttwo={0} endtwo={15}/>
     <TrustedCompany/>
     <BestService/>
<CompletedProject/>
       <Reviews/>
    </div>
  )
}

export default App