import React, { useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function CurentSession() {
  const navigate = useNavigate()
  
  //////////////////////////////////////////////
  const [dt , setDt] =useState({})
  const [client , setClient] =useState({})
  const [fac , setFac] =useState({})
  const [md , setMd] = useState('')
  const [Vac , setVac] = useState('')
  const url1 = `http://localhost:3030/api/client/medicalfile/`+client._id
  const urlvaccin = `http://localhost:3030/api/session/vaccine/new`
  const urlrdv = `http://localhost:3030/api/rdv/delete/`
  const urltest = `http://localhost:3030/api/session/test/new`
  
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  useEffect( ()=>{
    
    const url_rdv = `http://localhost:3030/api/rdv/get/`+id
    try {
      axios.get(url_rdv).then((response) => {
        setDt(response.data)
        setClient(response.data.client)
        setFac(response.data.facility)
        
      })
      
    } catch (error) {
      alert(error)
    }
  
  } , [setDt , setClient , setFac])

  function logout () {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location = "/userarea/login"
  }

  function handleMd () {
    const data = "- " + md + ' by: ' + localStorage.getItem('id') + ' on ' + fac.name + " " + fac._id
    axios.post(url1 , {medicalcase : data}).then(alert('added succefully'))
  }
 
  

  function regVac(e){
    e.preventDefault()
    const vacbody = {
      client : client._id,
      facility : fac._id,
      user : localStorage.getItem('id'),
      tp : Vac }
    try {
      axios.post(urlvaccin, vacbody).then(axios.post(urlrdv+id))
      navigate('/doctor/dashboard')
      
    } catch (error) {
      alert(error)
    }
  }
  function regtest(e){
    e.preventDefault()
    const testbody = {
      client : client._id,
      facility : fac._id,
      user : localStorage.getItem('id'),
      tp : Vac }

    

    try {
      axios.post(urltest , testbody).then(axios.post(urlrdv+id))
      navigate('/doctor/dashboard')
      
      
    } catch (error) {
      alert(error)
    }
    
  }
  function cancel () {
      alert('The Reservation will be deleted !!')
      axios.post(urlrdv+id).then(window.location ='/doctor/dashboard')
  }

  function rep () {
    if (dt.tp === 'test') {
      return(
        <>
        <div>
              <h1 className='font-bold text-4xl py-2' >Test Repport</h1>
              <form>
                <h1 className='text-2xl py-1'>Test Kit Used :</h1>
                <select
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => { setVac(e.target.value) }}
                    value={Vac}
                    required
                  >
                    <option value=''>please select your Test Type</option>
                    <option value='serology'>By Blood</option>
                    <option value='PCR'>PCR</option>
                  </select>
                  
                  <button onClick={(e) => regtest(e)} className='p-2 bg-white text-black border-2 my-2 rounded'>confirm</button>
                  <button onClick={() => cancel()} className='p-2 bg-black text-white border-2 mx-2 my-2 rounded'>cancel</button>
              </form>
            </div>
        </>
      )
    } else {
      return(
        <>
        <div>
          <form>
          <h1 className='font-bold text-4xl py-2'>Vaccination Repport</h1>
          <select
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => { setVac(e.target.value) }}
                    value={Vac}
                    required
                  >
                    <option value=''>please select your vaccination Type</option>
                    <option value='Pfizer'>Pfizer</option>
                    <option value='astraZenicka'>astraZenicka</option>
                    <option value='BioNtech'>BioNtech</option>
                    <option value='Moderna'>Moderna</option>
                    <option value='J&J'>J&J</option>
                  </select>
                  <button onClick={(e) => regVac(e)} className='p-2 bg-white text-black border-2 my-2 rounded'>confirm</button>
                  <button onClick={() => cancel()} className='p-2 bg-black text-white border-2 mx-2 my-2 rounded'>cancel</button>
              </form>
        </div>
        </>
      )
    }
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

        <div className='flex flex-wrap py-5'>
        <div className='border-black flex flex-col p-5 m-5 w-1/2'>
            <h1 className='font-bold text-4xl py-2'>Client Informations:</h1>
            <h1 className='text-2xl py-1'>Full NAME: {client.fn}</h1>
            <h1 className='text-2xl py-1'>NID: {client.idn}</h1>
            <h1 className='text-2xl py-1'>SID: {client._id}</h1>
            <h1 className='text-2xl py-1'>Birthdate: {client.bd}</h1>
            <h1 className='text-2xl py-1'>adress: {client.adr},{client.wilaya}</h1>
            {rep()}

          </div>
          <div className=' border-black flex border-2 flex-col p-5 m-5 w-1/2'>
          <h1 className='font-bold text-4xl py-5 w-full'>Client Medical Records:</h1>
          <h1 className='flex flex-wrap w-full'>{client.medicalFile }</h1>
          <div className='flex flex-wrap'>
          <form >
          <input
                    type='text'
                    name='medicalcase'
                    value={md}
                    onChange = {(e) =>{setMd(e.target.value)}}
                    placeholder='Add new Medical Record'
                    className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
                  <button onClick={() => {handleMd()}} className='p-2 bg-black text-white border-2 rounded'>Add</button>
          
          </form>
          </div>
          </div>
        </div>

          
         
        
       
      </div>
    </>
  )
}

export default CurentSession