import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ld from '../images/loader.gif'
import load from '../images/load.gif'
import Navbar from './Navbar'
import { useSelector } from 'react-redux';
import  fileDownload  from 'js-file-download'

function Data() {
  const {id}=useParams()
  const auth = useSelector((state) => state);
  console.log(auth)
  const [data,setdata]=useState(null)
  const [generated,setgenerated]=useState(false)
  const [loading,setloading]=useState(false)
  const [url,seturl]=useState()
  const generatehandler=async()=>{
    setloading(true);
    const res=await axios.post(`https://intromaker-backend.onrender.com/api/user/generate`,{
      name:auth.userdata.youtubechannel.toUpperCase(),
      templeteid:id
    })
    if(res.data.success===true){
      setgenerated(true)
      seturl(res.data.message)
      setloading(false)
    }
  }
  const getdata=async()=>{
    try{
      const res=await axios.get(`https://intromaker-backend.onrender.com/api/user/template/${id}`)
      if(res.data.success===true){
        setdata(res.data.message);
      }
    }catch(e){console.log(e)}
  }
  useEffect(()=>{
    getdata()
  },[id])
  return (
    <>
    <Navbar />
    {
      data?
      <div className='data_home'>
      <h2 className='head'>{data.name.toUpperCase()}</h2>
     <video className='vid_full' muted controls src={data.video}/>
   { loading?<div className='dow'>Generating Video plz wait<img className='loading' src={load} alt='loader' /></div>:null}
     <div className='dow'>
   
     {generated  ?  <button className='gen' onClick={()=>{
      fileDownload(url, `${Math.random()}.mp4`);
     }}> Download 😃</button>:  loading ? null :<button className='gen' onClick={generatehandler}>Generate Video</button>}
     </div>


    </div>
    :
    <div className='data_home'>
       <div className='load'><img  src={ld} alt='loader' /> </div>
    </div>
    }
   
    </>

  )
}

export default Data