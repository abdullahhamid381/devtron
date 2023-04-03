import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Components/Reuseable/Slider'
import Reason from './Components/Reason'
import Counterup from './Components/Counterup'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Slider/>
    <Reason/>
    <Counterup start={0} end={500}/>
    </div>
  )
}

export default App