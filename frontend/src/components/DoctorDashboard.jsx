import React, { useEffect, useState } from 'react'

import axios from 'axios'
function DoctorDashboard() {
  const [rdv , setRdv] =  useState([])
  
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

  function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = "/userarea/login"
  }

  const info = parseJwt(localStorage.getItem('token'))
  const today = new Date()
  const year = today.getFullYear() 
  let month
  let day
  if(today.getMonth() <10){
    month = today.getMonth()+1
    month = "0"+month
  }else{
    month = today.getMonth()+1
  }
  if(today.getDate() <10){
    day = today.getDate()
    day = "0"+day
  }else{
    day = today.getDate()
  }
  
  const yymmdd = year+"-"+month+"-"+day
  
  const url1 ="http://localhost:3030/api/rdv/get/today"
  const [ isMounted , setMount ] = useState(false)
  useEffect(()=>{
    if(!isMounted){
      try {
        axios.post(url1,{
            dateFormated : yymmdd , 
            facility : info.facility
          })
          .then((res)=>{
              setRdv(res.data)
              setMount(true)
          })
          
      } catch (error) {
        alert('error while loading today reservation')
      }
    }
    
  },[info.facility, yymmdd ,  setRdv , rdv ])
////////////////////////////////////////////
function Card  (rdv)   {
  return (
    <>
      <div className='m-5 flex'>
      <div key={rdv._id} className='flex flex-col border-2 rounded border-black  bg-gray-200 bg-opacity-50 m-30 p-10'>
        <h1 className='font-bold m-2'> Session :{rdv.tp}</h1>
        <h1 className='font-bold m-2'>Full Name : {rdv.client.fn}</h1>
        <h1 className='font-bold m-2'>Date : {rdv.date}</h1>
        <button onClick={() => window.location = `/session/${rdv._id}`} className='font-bold m-2 bg-blue-800 bg-opacity-40 p-2  rounded-3xl shadow-blue-500'>Start Session</button>
      </div>
      </div>
    </>
    )}
  if (rdv.length === 0) {
    return(
      <>
        <div className='p-4 flex justify-center flex-col  '>
        <div className='flex justify-between'>
          <div className='flex'>
            <button onClick={()=> window.location = '/doctor/dashboard'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Home</button>
            <button onClick={()=> window.location = '/doctor/pending'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Pending</button>
          </div>
            <button onClick={() => logout()} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
        </div>
        <div className='flex flex-wrap w-full p-5'>
        <div className='flex flex-col justify-center p-10'>
          <h1 className='text-9xl font-bold p-10'>Oops...</h1>
          <h1 className='text-7xl font-bold p-10'>There is no Reservation For Today !!</h1>
        </div>
          
        </div>
       
      </div>
      </>
    )
  } else {
     return(
      <>
      <div className='p-4 flex justify-center flex-col  '>
      <div className='flex justify-between'>
        <div className='flex'>
          <button onClick={()=> window.location = '/doctor/dashboard'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Home</button>
          <button onClick={()=> window.location = '/doctor/pending'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Pending</button>
        </div>
          <button onClick={() => logout()} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
      </div>
      <div className='flex flex-wrap w-full m-5 p-5'>
      <div className='flex flex-wrap justify-center m-5 p-10   '>
        {rdv.map((rdv) => Card(rdv))}
      </div>
        
      </div>
     
    </div>
    </>
     )
    
      
    
  }

}

export default DoctorDashboard