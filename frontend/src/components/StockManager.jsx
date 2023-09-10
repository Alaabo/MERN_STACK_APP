import React, { useState , useEffect} from 'react'
import axios from 'axios'
function StockManager() {
  const [type , settype ] = useState('')
  const [unite , setunite ] = useState('')
  const [qnt , setqnt ] = useState('')
  const [ isMounted , setMount ] = useState(false)
  const [ hist , sethisto] = useState([])


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

  const url1 = "http://localhost:3030/api/stock/get"
  const url2 = "http://localhost:3030/api/stock/new"

  useEffect(()=>{
    if(!isMounted){
      try {
        axios.post(url1 , {facility : info.facility})
          .then((res)=>{
              sethisto(res.data)
              setMount(true)
          })
          
      } catch (error) {
        alert('error while loading today reservation')
      }
    }
    
  },[info.facility, yymmdd ])
  function handleReg(){
    try {
      axios.post(url2 , {
        facility: info.facility,
        date :  yymmdd,
        tp: type,
        unite: unite,
        qnt : qnt}).then((res)=>{
          alert(JSON.stringify(res.data))
          window.location.reload()
        })
    } catch (error) {
      alert(error)
    }
  }
  

    if(hist.length === 0){
      return(
         <>
    <div className='flex flex-col justify-center w-full content-center p-5'>
      <div className='flex flex-wrap justify-between'>
        <h1 className='font-bold py-2'>Dashboard</h1>
        <h1 className='font-bold py-2' >Stock Manager</h1>
        <button onClick={() => logout()} className='py-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
      </div>
      <div className=' flex flex-col'>
        <div className=' flex justify-center content-center'>
          <form className=' flex flex-wrap w-full'>
              <h1 className='py-2 font-semibold'>Type </h1>
              <select
                    className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => { settype(e.target.value) }}
                    value={type}
                    required
                  >
                    <option value=''>please select your Test Type</option>
                    <option value='test'>Test Kit</option>
                    <option value='vaccine'>Vaccine Dose</option>
                  </select>
                  <h1 className='py-2 font-semibold'>Unite</h1>
                  <input onChange={(e) =>{setunite(e.target.value)}} className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter the specification manually'></input>
                  <h1 className='py-2 font-semibold'>Qnt</h1>
                  <input onChange={(e) =>{setqnt(e.target.value)}} className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter the specification manually'></input>
          <button onClick={()=>handleReg()} className='flex justify-center w-full font-bold p-4 '>Register</button>
          </form>
        </div>
        <div>
        <div className='flex justify-center justify-items-center p-10'>
          <h1 className='font-semibold text-5xl'><span className='font-black text-9xl'>Nothing...!</span><br></br>to show yet</h1>
        </div>
        </div>
      </div>
    </div>
        
      </>
      )
    }else{
      return(
        <>
      <div className='flex flex-col justify-center w-full content-center p-5'>
        <div className='flex flex-wrap justify-between'>
          <h1 className='font-bold py-2'>Dashboard</h1>
          <h1 className='font-bold py-2' >Stock Manager</h1>
          <button onClick={() => logout()} className='py-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
        </div>
        <div className=' flex flex-col'>
          <div className=' flex justify-center content-center'>
            <form className=' flex flex-wrap w-full'>
                <h1 className='py-2 font-semibold'>Type </h1>
                <select
                      className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      onChange={(e) => { settype(e.target.value) }}
                      value={type}
                      required
                    >
                      <option value=''>please select your Test Type</option>
                      <option value='test'>Test Kit</option>
                      <option value='vaccine'>Vaccine Dose</option>
                    </select>
                    <h1 className='py-2 font-semibold'>Unite</h1>
                    <input onChange={(e) =>{setunite(e.target.value)}} className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter the specification manually'></input>
                    <h1 className='py-2 font-semibold'>Qnt</h1>
                    <input onChange={(e) =>{setqnt(e.target.value)}} className='  shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Enter the specification manually'></input>
            <button onClick={()=>handleReg()} className='flex justify-center w-full font-bold p-4 '>Register</button>
            </form>
          </div>
         <div className='flex flex-col justify-center'>
         <div className='w-full h-0.5 bg-black'>.</div>
         <h1 className='font-black text-4xl'>Historical Records Of The Stock</h1>
          <div className=' flex flex-row'>
            <div className='flex flex-col mx-2'>
            {hist.map((hist)=> {
              return(
              <div key={hist._id} className='flex flex-col  justify-evenly '>
              <div className='   m-2'>{hist._id}</div>
              
            </div>
           )
          })}
            </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-2'>{hist.date}</div>
            
          </div>
           )
          })}
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-2'>{hist.tp}</div>
            
          </div>
           )
          })} 
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-2'>{hist.qnt}</div>
            
          </div>
           )
          })}
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-2'>{hist.unites}</div>
            
          </div>
           )
          })}
          </div>
          
          </div>
         </div>
        </div>
      </div>
      </>
      )
    }
  
}

export default StockManager