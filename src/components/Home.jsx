import React from 'react'
import Navbar from './Navbar'
import y from '../images/youtube.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  return (
    <div className='homepage'>
      <Navbar />
      <div className='home'>
        <div className='part_1'>
          <img src={y} alt='logo' />
        </div>
        <div className='part_2'>
            <h1>IntroMaker</h1>
          <h1>Create Youtube Intro's Easily </h1>
          <h3>Intromaker made it very to create youtbe intro's very easily ! signup now
            and enjoy free available tamplates ,it feels very happy to have more users like you
          </h3>
       <button className='login_now' onClick={()=>{navigate("/templates")}}>Explore Templates</button>
        </div>
    </div>
      
    </div>
  )
}

export default Home
