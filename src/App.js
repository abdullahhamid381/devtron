import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Reuseable/Slider'

import Counterup from './Components/Counterup'
import TrustedCompany from './Components/TrustedCompany'
import CompletedProject from './Components/CompletedProject'
import Reviews from './Components/Reviews'
import BestService from './Components/BestService'
import History from './Components/History'
import Blog from './Components/Blog'
import Footer from './Components/Footer'
import Ourprojects from './Components/Ourprojects'
import Choose from './Components/Choose'
import Work from './Components/Work'
const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />

      <Counterup start={0} end={500} starttwo={0} endtwo={15} />
      <TrustedCompany />
      {/* <Choose /> */}
      <BestService />

      {/* <CompletedProject /> */}
      <Work/>
      <History start={0} end={200} starttwo={0} endtwo={100} startthree={0} endthree={10} startfour={0} endfour={24} />
      <Reviews />

      {/* <Blog/> */}
      <Footer />
    </div>
  )
}

export default App