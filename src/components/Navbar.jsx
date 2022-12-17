import axios from 'axios';
import React, { useState } from 'react'
import {GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {actions} from "../store/store.js"
function Navbar() {
  const[shownav,setshownav]=useState(false)
  const auth = useSelector((state) => state);
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const logouthandler=async()=>{
    const res=await axios.post("https://intromaker-backend.onrender.com/api/user/logout");
    if(res.data.success===true){
      dispatch(actions.logout());
      navigate('/login')
    }
  }
  return (
    <nav className='navbar'>
      <div className='hamburger' onClick={()=>{shownav?setshownav(false):setshownav(true)}}>
       <GiHamburgerMenu />
      </div>
      {
        shownav?<div className='slider'>
          <ul className='navul_s'>
            <li className='navol_ss ' onClick={()=>{navigate('/')}}>HOME</li>
            <li className='navol_ss' onClick={()=>{navigate('/templates')}}>TEMPLATES</li>
           {auth.isloggedin===true  ?<li className='navol_ss' onClick={()=>{logouthandler()}}>LOGOUT</li> : <li className='navol_ss' onClick={()=>{navigate('/login')}}>LOGIN</li>}
        </ul>

        </div>:null
      }
        <ul className='navul'>
            <li className='navol ' onClick={()=>{navigate('/')}}>HOME</li>
            <li className='navol' onClick={()=>{navigate('/templates')}}>TEMPLATES</li>
           {auth.isloggedin===true ?<li className='navol_s' onClick={()=>{logouthandler()}}>LOGOUT</li> : <li className='navol_s' onClick={()=>{navigate('/login')}}>LOGIN</li>}
                        
        </ul>
    </nav>
  )
}

export default Navbar

