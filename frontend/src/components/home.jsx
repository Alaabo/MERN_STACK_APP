import React , {useState , useEffect}from 'react'
import logo from "./assets/sireng.png"
import file from './assets/file.png'
import man from './assets/man.png'
import lock from "./assets/lock.png"
import {NavLink } from 'react-router-dom'
import axios from 'axios'


function Home() {
  const [totalCases, settotalCase] = useState(0)
  const [activeCass, setactiveCase] = useState(0)
  const [death, setDeath] = useState(0)
  const [recovered, setRecovered] = useState(0)
  const [vaccine, setVaccine] = useState(0)
  const covidestatusUrl = 'https://disease.sh/v3/covid-19/countries/dz?strict=true'
  const vaccinestatusUrl = 'https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1&fullData=true'
  
  useEffect(() => {
    getTotalCases();
    getActiveCases()
    getdeaths()
    getrecovered()
    getvaccine()
}, []); 

   const getTotalCases = () => {
    axios.get(covidestatusUrl)
      .then((res) => {
        
        settotalCase(res.data.cases)
        
      })
      .catch(err => console.log(`error is ${err}`))

   }
   const getActiveCases = () => {
    axios.get(covidestatusUrl)
      .then((res) => {
        
        setactiveCase(res.data.critical)
        
      })
      .catch(err => console.log(`error is ${err}`))

   }
   const getdeaths = () => {
    axios.get(covidestatusUrl)
      .then((res) => {
        
        setDeath(res.data.deaths)
        
      })
      .catch(err => console.log(`error is ${err}`))

   }
   const getrecovered = () => {
    axios.get(covidestatusUrl)
      .then((res) => {
        
        setRecovered(res.data.recovered)
        
      })
      .catch(err => console.log(`error is ${err}`))

   }
   const getvaccine = () => {
    axios.get(vaccinestatusUrl)
      .then((res) => {
        
        setVaccine(res.data[0].total)
        
        
      })
      .catch(err => console.log(`error is ${err}`))

   }


  return (
          <>        
                    
                    <section className='bg-green-200 '>
                    <div className='bg-green-400 px-4  w-full flex justify-between'>
                            <NavLink to="/"><h1 className='text-white  text-5xl font-bold '>CureHub</h1></NavLink>
                            <div className='flex justify-evenly p-1'>
                              <NavLink to="/login">
                                <button className='text-white mx-4  bg-blue-900 hover:bg-white hover:text-black  font-medium rounded-full text-sm px-5 py-2.5 text-center '>Login</button>
                              </NavLink>
                              <NavLink to="/register">
                                <button className='text-white mx-4 bg-blue-900 hover:bg-white hover:text-black  font-medium rounded-full text-sm px-5 py-2.5 text-center '>Register</button>
                              </NavLink>
                            
                            
                            </div>
                      </div>
                              
                              <div className='flex justify-center mb-10' >
                                        <div className='font-body  w-1/2 mt-5 mx-5'>
                                                  
                                                  <h2 className='text-black text-8xl font-bold mb-5'>Manage your Healthy life here</h2>
                                                  <div className='w-full bg-black border-t-black border-2 mb-5 '></div>
                                                  <h3 className='text-gray-700 text-4xl w-3/4 mb-4'>Reserve and manage covid tests and vaccination in one place</h3>
                                                  <NavLink to="/login">
                                                    <h2 className='text-white bg-black font-bold text-3xl w-60 text-center  rounded-full hover:bg-white hover:text-black'>start now --&gt;</h2>
                                                  </NavLink>
                                        </div>
                                        <div className='font-body mt-28 mx-32 '>
                                                  <img className=' w-80 ' src={logo} alt='illustration from icon8'/>
                                                  
                                                  
                                        </div>
                              </div>
                              <div className='mb-28 mt-24'>
                                        <div className='flex justify-center mb-7 mt-20 '>
                                        <img className=' mx-20 w-80 shadow-xl' src={file} alt="from icon8"></img>
                                          <div className='mx-20'>
                                            <h1 className='text-5xl font-black '>Create and manage medical file</h1>
                                            <h2 className='text-3xl w-80 text-gray-800'>Grabe all your medical informations and historical records in one place</h2>
                                          </div>            
                                        </div>
                                        
                                        <div className='flex justify-center mb-7 mt-20'>
                                          <div className='mx-20'>
                                            <h1 className='text-5xl font-black '>Faster but Better</h1>
                                            <h2 className='text-3xl w-80 text-gray-800'>Reserve for your medical session in one place and be discoverable for doctors and get your[cases from anywhere</h2>
                                          </div>            
                                        <img className=' mx-20 w-80 ' src={man} alt="from icon8"></img>
                                        </div>

                                        
                                        <div className='flex justify-center mb-7 mt-20'>
                                        <img className=' mx-20 w-80' src={lock} alt="from icon8"></img>
                                          <div className='mx-20'>
                                            <h1 className='text-5xl font-black '>Secure and Handfull</h1>
                                            <h2 className='text-3xl w-80 text-gray-800'>Your[cases always belong to only you and no one else</h2>
                                          </div>            
                                        </div>



                                        <div className='flex justify-center mb-4 mt-7'>
                                        <div className='w-1/2 bg-black border-t-black border-2 '></div>
                                        </div>
                              </div>
                              <div>
                                  <div className='flex justify-center mb-4'>
                                                      <h1 className='font-bold text-7xl'>Statistics about covid and vaccines</h1>
                                                    
                                  </div>
                                  <div className='flex flex-col justify-between'>
                                        <div className=' bg-yellow-500  flex m-3 px-10 justify-center items-center p-4 shadow-2xl shadow-yellow-900 rounded-3xl hover:bg-yellow-600'>
                                            <h1 className='font-bold text-white text-8xl  '>Total cases<br></br>{totalCases}</h1>
                                        </div>
                                        <div className='flex justify-evenly'>
                                          <div className=' bg-gray-500 w-2/3  m-3 px-10 flex justify-center items-center p-4 shadow-2xl shadow-gray-900 rounded-3xl hover:bg-gray-700'>
                                              <h1 className='font-bold text-white text-8xl  '>Deaths<br></br>{death}</h1>
                                          </div>
                                          <div className=' bg-green-500 m-3 px-10 flex justify-center items-center p-4 shadow-2xl shadow-green-900 rounded-3xl hover:bg-green-700'>
                                              <h1 className='font-bold text-white text-8xl  '>recovery<br></br>{recovered}</h1>
                                          </div>
                                        </div>

                                        <div className='flex justify-between'>

                                        <div className=' bg-red-500 w-1/3 m-3 px-10 flex justify-center items-center p-4 shadow-2xl shadow-red-900 rounded-3xl hover:bg-red-700'>
                                            <h1 className='font-bold text-white text-8xl  '>critical cases <br></br>{activeCass}
                                            
                                        </h1>
                                      
                                      </div>
                                        <div className=' bg-blue-500 w-2/3 m-3 px-10 flex justify-center items-center p-4 shadow-2xl shadow-blue-900 rounded-3xl hover:bg-blue-700'>
                                            <h1 className='font-bold text-white text-8xl  '>vaccine doses<br></br>{vaccine}
                                        </h1>
                                      
                                      </div>
                                        </div>


                                      
                                      
                                    
                                      
                                  </div>
                                  
                              </div>
                              <div className='bg-green-400 mt-16'>
                                  <div className='flex justify-center'>
                                    <p className='w-1/2 mx-4 pt-2 pb-3 text-gray-700 text-center'>this website is realised for educational purpose only and all information you see here are simulated in the lab and dosn't relate to the reality and can't be treated as offivial source <br></br>statistics are derived by api request from <a href='https://disease.sh/docs/#/COVID-19%3A%20Vaccine/get_v3_covid_19_vaccine_coverage'> here</a> </p>
                                    
                                  </div>
                              </div>
                              
                    </section>
                    
          </>
  )
}

export default Home