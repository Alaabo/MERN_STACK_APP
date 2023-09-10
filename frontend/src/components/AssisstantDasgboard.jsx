import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AssisstantDasgboard() {

  const urlrdv = `http://localhost:3030/api/rdv/delete/`
  const [rdv , setRdv] =  useState([])
  const [vac , setVac] =  useState(0)
  const [tst , settst] =  useState(0)
  
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
  const urlstock ="http://localhost:3030/api/stock/get/assiss"
  const [ isMounted , setMount ] = useState(false)
  const [stock , setStock] = useState([])
  useEffect(()=>{
    if(!isMounted){
      try {
        axios.post(urlstock , {
          facility : info.facility,
          date :  yymmdd
        }).then((res)=>{setStock(res)})
      } catch (error) {
        
      }
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
    
  },[info.facility, yymmdd ,  setRdv , setStock , rdv ])
  
  function Handledelete(x) {
    alert('The Reservation will be deleted !!')
    axios.post(urlrdv+x).then(window.location.reload())
  }
////////////////////////////////////////////


function stock1 () {
    stock.map((stock) =>{
      if(stock.tp === 'test'){
        setVac(vac + stock.qnt)
      }else{
        settst(tst+stock.qnt)
      }
    })
}
function Card  (rdv)   {
  return (
    <>
      <div className='m-5 flex'>
      <div key={rdv._id} className='flex flex-col border-2 rounded border-black  bg-gray-200 bg-opacity-50 m-30 p-10'>
        <h1 className='font-bold m-2'> Session :{rdv.tp}</h1>
        <h1 className='font-bold m-2'>Full Name : {rdv.client.fn}</h1>
        <h1 className='font-bold m-2'>Phone : {rdv.client.phn}</h1>
        <h1 className='font-bold m-2'>Date : {rdv.date}</h1>
        <button onClick={() => Handledelete(rdv._id)} className='font-bold m-2 bg-black text-white bg-opacity-80 p-2  rounded-3xl shadow-blue-500'>Delete Reservation</button>
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
            <h1 className='font-bold '>Dashboard</h1>
            
          </div>
            <button onClick={() => logout()} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
        </div>
        <div className='flex flex-wrap w-full p-5'>
        <div className='flex'>
          <h1 className='mx-2'>available vaccine doses: {vac}</h1>
          <h1 className='mx-2'>available test kit doses: {tst}</h1>
        </div>
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
        <h1 className='font-bold '>Dashboard</h1>
        </div>
          <button onClick={() => logout()} className='px-4 mx-2 font-semibold hover:border-b-black border-b-white border-b-2'>Logout</button>
      </div>
      <div className='flex flex-wrap w-full m-5 p-5'>
      <div className='flex flex-wrap justify-center m-5 p-10   '>
        {/* {stock.map((stock) => Stock(stock))} */}
        <div>
          <h1>available vaccine doses: {vac}</h1>
          <h1>available test kit doses: {tst}</h1>
        </div>
        {rdv.map((rdv) => Card(rdv))}
      </div>
        
      </div>
     
    </div>
    </>
     )
    
      
    
  }
}

export default AssisstantDasgboard