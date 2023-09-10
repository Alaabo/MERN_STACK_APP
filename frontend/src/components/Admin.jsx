import React, { useState, useEffect } from 'react'
import Stock from './admin_comp/Stock'
import Users from './admin_comp/Users'
import Facilitiess from './admin_comp/Facilitiess'
import NewFacility from './admin_comp/NewFacility'
import NewAccount from './admin_comp/NewAccount'
import axios from 'axios'
function Admin() {
      const [view, setView] = useState('')
      const [facilities , setFac] = useState([])
      const [users , setUsers] = useState([])
      const [ hist , sethisto] = useState([])
      const url1 = "http://localhost:3030/api/stock/get/admin"
      const url2 = 'http://localhost:3030/api/facility/all'
      const url3 = 'http://localhost:3030/api/user/all'
      const GetFac =  () => {
            try {
                      axios.get(url2)
                                .then((res)=>{
                                      
                                    setFac(res.data)
                                })
            } catch (error) {
                      return error
            }
  }
      const GetUsers =  () => {
            try {
                      axios.get(url3)
                                .then((res)=>{
                                      
                                    setUsers(res.data)
                                })
            } catch (error) {
                      return error
            }
  }
  
      const GetStock = () =>{
            
                  try {
                        axios.post(url1 )
                          .then((res)=>{
                              sethisto(res.data)
                              
                          })
                          
                      } catch (error) {
                        alert('error while loading today reservation')
                      }
                    
      }
      useEffect(() => {
            setView(
                  <div className='text-3xl text-gray-700 flex h-screen justify-center items-center'>
                        <h1>welcom back admin</h1>
                  </div>
            )
            GetFac()
            GetUsers()
            GetStock()
            
            
      }, []
      )
      const handlLogout = () => {
            localStorage.removeItem("token");
            localStorage.removeItem("admin");
            window.location = '/'
		
      }
      
     

      return (
            <>
                  <div className='h-screen flex'>
                        <div className='h-screen fixed w-14 bg-gray-300 shadow-2xl'>

                              <div className=' flex flex-col items-center justify-between min-h-screen py-2 my-2'>
                                    <div>
                                          <div className='p-2'>
                                                <img
                                                      src="https://img.icons8.com/ios-filled/50/000000/company.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8'
                                                      onClick={() => { setView(NewFacility) }} />
                                          </div>
                                          <div className='p-2'>
                                                <img
                                                      src="https://img.icons8.com/ios-filled/50/000000/add-user-male.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8'
                                                      onClick={async () => { setView(NewAccount(facilities ))}} />
                                          </div>
                                          <div className='p-2'>
                                                <img
                                                      src="https://img.icons8.com/ios-filled/50/000000/client-company.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8'
                                                      onClick={() => { setView(Facilitiess(facilities)) }} />
                                          </div>
                                          <div className='p-2'>
                                                <img
                                                      src="https://img.icons8.com/ios-filled/50/000000/gender-neutral-user.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8'
                                                      onClick={() => {setView(Users(users))}}
                                                      />
                                          </div >

                                          <div className='p-2'>
                                                <img src="https://img.icons8.com/ios-filled/50/000000/gold-bars.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8' 
                                                      onClick={() => { setView(Stock(hist)) }} />
                                          </div>

                                    </div>
                                    <div>
                                          <div className='p-2'>
                                                <img
                                                      src="https://img.icons8.com/ios-filled/50/000000/logout-rounded.png"
                                                      alt='https://icons8.com/icon/37914/business-building Business Building icon by Icons8'
                                                      onClick={() => { setView(handlLogout) }} />
                                          </div>
                                    </div>
                              </div>


                        </div>
                        <div className='ml-14  w-screen'>
                              {view}
                        </div>
                        
                  </div>
            </>
      )
}



export default Admin