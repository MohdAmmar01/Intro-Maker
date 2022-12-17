import React, { useState } from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import axios from 'axios'
import ld from '../images/loader.gif'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Templates() {
  const auth = useSelector((state) => state);
    const [temp,settemp]=useState(null);
    const navigate=useNavigate()
    
    const getdata=async()=>{
      try{
      const res=await axios.get("http://localhost:8000/api/user/gettemplates");
      if(res.data.success===true){
        settemp(res.data.message);
      }
      }catch(e){console.log(e)}
      }
      
    useEffect(()=>{
      getdata()
    },[])
  return (
    <>
      <Navbar />
      <div className='templates'>
      <h3>All TEMPLATES</h3>

        {
          temp? <div className='templ' >
           {
            temp.map((elem, i) => {
              return (
                <div className='t' key={i}>
                 <video className='vid'  controls src={elem.video} />
                 <h3 className='t-h' onClick={()=>{auth.isloggedin===true ? navigate(`/template/${elem.templateid}`) : navigate("/login")}}>{elem.name}</h3>
                </div>
              )
            })
           }
          </div>
          :
          <div className='load'><img src={ld} alt='loader' /> </div>
        }

      </div>
    
    </>
   
  )
}

export default Templates
