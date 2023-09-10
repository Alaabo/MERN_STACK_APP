import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PendingRes() {
  const [pen , setPen] = useState([])
  const urltest = `http://localhost:3030/api/session/pendingresults`
  useEffect(()=>{
    try {
      axios.get(urltest).then((res)=>{
        setPen(res.data)
      })
    } catch (error) {
      alert(error)
    }
    
  },[setPen])
  function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = "/userarea/login"
  }

  function updateRespositive (id){
    const url =  `http://localhost:3030/api/session/setresult/`+ id
    try {
      axios.post(url,{res : 'positive'}).then(window.location.reload())
    } catch (error) {
      alert(error)
    }
  }
  function updateResNeggative (id){
    const url =  `http://localhost:3030/api/session/setresult/`+ id
    try {
      axios.post(url,{res : 'negative'}).then(window.location.reload())
    } catch (error) {
      alert(error)
    }
  }

  function Card  (x) {
    return(
      <>
        <div className='flex flex-wrap p-10 w-full justify-between'> 
          <div className='m-2 p-2'>{x.client.fn}</div>
          <div className='m-2 p-2'>{x.date}</div>
          <div className='m-2 p-2'>{x.user._id}</div>
          <div>
            <button onClick={()=> updateRespositive(x._id)} className='m-2 p-2 text-red-600 font-bold'>Positive</button>
            <button onClick={()=> updateResNeggative(x._id)} className='m-2 p-2 text-green-500 font-bold'>Negative</button>
          </div>
        </div>
      </>
    )

  }

  return (
    <>
      <div className='p-4 flex justify-center flex-col  '>
      <div className='flex justify-between'>
          <div className='flex'>
            <button onClick={()=> window.location = '/doctor/dashboard'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Home</button>
            <button onClick={()=> window.location = '/doctor/pending'} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Pending</button>
          </div>
            <button onClick={() => logout()} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
        </div>
        <div  className='flex flex-col w-full'>
        
          {pen.map((pen) => Card(pen))}
        </div>
      </div>
    </>
  )
}

export default PendingRes