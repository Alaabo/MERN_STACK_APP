import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ClientDashboard() {
  const [dates , setDates] = useState([])
  const [TestRes , setTestRes] = useState([])
  const [mf , setMf] = useState('')
  const rvdByClient ="http://localhost:3030/api/rdv/getClient/"
  const deleterdv ='http://localhost:3030/api/rdv/delete/'
  const getUserTest ='http://localhost:3030/api/session/usertest/'
  const getUsermf ='http://localhost:3030/api/client/mf/'
  const fetchmf = () =>{
    const id = localStorage.getItem('id')
    try {
        axios.post(getUsermf+id)
          .then((res)=>{
            
               setMf(res.data)
              

          })
      } catch (error) {
        alert(error)
      }
  }
  const fetchRdv = () =>{
    const id = localStorage.getItem('id')
    try {
        axios.get(rvdByClient+id)
          .then((res)=>{
            
               setDates(res.data)
              

          })
      } catch (error) {
        alert(error)
      }
  }
  const fetchTest = () =>{
    const id = localStorage.getItem('id')
    try {
        axios.get(getUserTest+id)
          .then((res)=>{
            
               setTestRes(res.data)
              

          })
      } catch (error) {
        alert(error)
      }
  }

  useEffect(()=>{
    fetchRdv()
    fetchTest()
    fetchmf()
  },[])

  const handleLogout = ()=>{
            localStorage.clear();
            window.location = '/'
  }
  function deleteRdv(id){
    try {
        axios.post(deleterdv+id)
          .then(()=>{
            window.location.reload();
          })
    } catch (error) {
      alert(error)
    }
  }


  function Dates () {
    if (dates.length === 0) {
      return (
         <>
          <div className='text-center text-4xl bg-white p-5 bg-opacity-40 drop-shadow-lg w-5/6 font-bold rounded-3xl'>

          <div >You look perfect and healthy <br></br>UwU<br></br> you have no dates </div>
          <div>
            <button onClick={()=>{window.location = '/date/new'}} className='bg-blue-600 bg-opacity-30 shadow-xl p-2 m-2 rounded-3xl hover:bg-opacity-50'>Want to make a date ??</button>

          </div>
          </div>
         </>
        )
    } else {
      return(
        dates.map((rdv)=>{
          
          
          return(
            <>
            
              <div key={rdv._id} className='flex justify-between rounded shadow-2xl shadow-green-600 bg-white bg-opacity-30  p-5'>
                  <div className='flex'>
                  <h1 className='font-bold px-4 py-2'>Location : {rdv.facility.name}</h1>
                  <h1 className='font-bold px-4 py-2'>Date : {rdv.date}</h1>
                  <h1 className='font-bold px-4 py-2'>Type : {rdv.tp}</h1>
                  </div>
                  <button onClick={()=>deleteRdv(rdv._id)} className='font-bold px-4 bg-red-600 hover:bg-opacity-75 bg-opacity-50 rounded-full py-2'>Delete</button>
              </div>
            </>
          )
        })
      )
    }
    
  }
  //////////////////////////////////////////////
  function Tests () {
    const restest = (b) =>{
      if(b===null)
      {
        return (
          <h1>Pending</h1>
        )
      }else{
        return(
          <h1>{b}</h1>
        )
      }
    }
    if (TestRes.length === 0) {
      return(
        <>
        
          <div className='text-center text-4xl bg-red-400 p-5 bg-opacity-40 drop-shadow-lg w-5/6 font-bold rounded-3xl'>

          <div >You Have No tests Yet <br></br>Maybe You Should Have One<br></br> Reserve a session first </div>
          <div>
            <button onClick={()=>{window.location = '/date/new'}} className='bg-blue-600 bg-opacity-30 shadow-xl p-2 m-2 rounded-3xl hover:bg-opacity-50'>Want to make a date ??</button>

          </div>
          </div>
         </>
        
      )
    } else {
      return(
        TestRes.map((test)=>{
          return(
            <>
              <div key={test._id} className='flex flex-col p-4 flex-wrap m-2 bg-purple-700 rounded-3xl shadow-xl bg-opacity-30'>
                <div className='w-full p-1'>
                  <h1 className='text-3xl font-bold'>result :</h1>
                  <div className='font-black text-5xl'>{restest(test.res)}</div>
                </div>
                <div className='w-full p-1'>
                  <h1>facility :</h1>
                  <h1>{test.facility.name}</h1>
                </div>
                <div className='w-full p-1'>
                  <h1 className=''>Doctor digital signature :</h1>
                  <h1>{test.user._id}</h1>
                </div>
                <div className='w-full p-1'>
                  <h1>Date Of Examination :</h1>
                  <h1>{test.date}</h1>
                </div>
              </div>
            </>
          )
        })
      )
    }
  }
  ///////////////////////////////////
 
  function MedicalRecords () {
    if (mf === '') {
      return (
        <>
           <div>there is nothing to show yet check a doctor to setup your medical file</div>
        </>
      )
    } else {
      return(
        <>
        <div>{mf}</div>
        </>
      )
    }
  }
  return (
    <>    
      <div className=' bg-white fixed bg-opacity-25 drop-shadow-2xl w-screen'>
        <div className='flex justify-center'>
          <div className='p-2'>
            <button onClick={handleLogout} className='font-bold  mx-5 hover:border-b-2 hover:border-b-black'>Logout</button>
            <button onClick={()=>{window.location = '/user/profile'}} className='font-bold  mx-5 hover:border-b-2 hover:border-b-black'>profile</button>
            <button onClick={()=>{window.location = '/statistic'}} className='font-bold  mx-5 hover:border-b-2 hover:border-b-black'>Statistic</button>
            <button onClick={()=>{window.location = '/date/new'}} className='font-bold  mx-5 hover:border-b-2 hover:border-b-black'>Reservation</button>
          </div>
        </div>

      </div>
<div className=' bg-green-200 '>
  <div className=' w-screen'>
    <div className='font-bold text-8xl w-full pt-10 px-4 '>
      Welcome Back Mr.{localStorage.getItem('fn')}
    </div>
    <div className='flex flex-col bg-green-200 w-full h-full'>
      <h1 className='text-3xl font-bold p-10'>Your Futur Dates</h1>
      <div className='w-full flex flex-col justify-center p-10'>{Dates()}</div>
    </div>
    <div className='flex flex-col bg-green-200 w-full h-full'>
      <h1 className='text-3xl font-bold p-10'>Test Results</h1>
      <div className='w-full flex flex-wrap justify-center p-10'> {Tests()}</div>
    </div>
    <div className='flex flex-col bg-green-200 w-full h-full'>
      <h1 className='text-3xl font-bold p-10'>Medical Records</h1>
      <div className='w-full flex justify-center p-10'>
        {MedicalRecords()}
        
      </div>
    </div>
    <div className='w-full h-60 bg-gray-800'>
      <h1 className='text-white text-2xl text-center p-20'>This is a university project and all data here are generated and dont relate to real life in any way possible </h1>
    </div>
  </div>
</div> 

    </>
  )
}

export default ClientDashboard