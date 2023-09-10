import React from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'

function Stock(hist) {

    if(hist.length === 0){
      return(
         <>
    
      <div className=' flex flex-col'>
        
        <div>
        <div className='flex justify-center justify-items-center p-10'>
          <h1 className='font-semibold text-5xl'><span className='font-black text-9xl'>Nothing...!</span><br></br>to show yet</h1>
        </div>
        </div>
      </div>
    
        
      </>
      )
    }else{
      return(
        <>
      <div className='flex flex-col justify-center w-full content-center p-5'>
       
        <div className=' flex flex-col'>
          
         <div className='flex flex-col justify-center'>
         <h1 className='font-black text-4xl'>Historical Records Of The Stock</h1>
          <div className=' flex flex-row'>
            <div className='flex flex-col mx-2'>
            {hist.map((hist)=> {
              return(
              <div key={hist._id} className='flex flex-col  justify-evenly '>
              <div className='   m-1'>{hist._id}</div>
              
            </div>
           )
          })}
            </div>
            <div className='flex flex-col mx-2'>
            {hist.map((hist)=> {
              return(
              <div key={hist._id} className='flex flex-col  justify-evenly '>
              <div className='   m-1'>{hist.facility.name}</div>
              
            </div>
           )
          })}
            </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-1'>{hist.date}</div>
            
          </div>
           )
          })}
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-1'>{hist.tp}</div>
            
          </div>
           )
          })} 
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-1'>{hist.qnt}</div>
            
          </div>
           )
          })}
          </div>
          <div className='flex flex-col mx-2'>
          {hist.map((hist)=> {
           return(
            <div key={hist._id} className='flex flex-col  justify-evenly '>
            <div className='   m-1'>{hist.unites}</div>
            
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

export default Stock