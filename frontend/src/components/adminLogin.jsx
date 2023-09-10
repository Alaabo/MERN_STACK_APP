import React , {useState}from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import key from './assets/key.png'
function AdminLogin() {
          const [user , setUser] = useState('')
          const [Psw , setPsw] = useState('')
          const [error1 , setError] = useState()
  
  
  const handleSubmit =  async (e) => {
    e.preventDefault()
    try {
        const url ="http://localhost:3030/api/user/login"
        
        await axios.post(url , {
          un : user,
          psw : Psw
        })
          .then((response) =>{
            
                    if (response.data === 'wrong credentials' ) {
                              setError(response.data)
                    } else {
                              localStorage.setItem("token", response.data);
                              localStorage.setItem("admin", true);
			window.location = "/admin/dashboard";
                    }
                    
          })
      } catch (error) {
        alert(error)
      }
    
  }
          ///////////////////////////////////////////////////////////

          return (
          <>
          <section className='bg-green-200 '>
          <div className="flex h-screen items-center justify-center">
                    <div className='flex justify-around'>
                              
                              <div className='w-1/6 ' >
                              <img className=' ' src={key} alt='from icon8'></img>
                              <h1 className='text-center text-9xl font-bold text-blue-500 blur '>Login</h1>
                              </div>
                                        
                                        <form onSubmit={handleSubmit} method="post" className='w-1/2 h-2/3 flex flex-col justify-center bg-green-300 p-10'>
                                                  <input 
                                                            type='text' 
                                                            name='un' 
                                                            placeholder='Email'
                                                            onChange={(event) => setUser(event.target.value)}
                                                                                                                    value={user}
                                                            className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                            ></input>
                                                  <br></br>
                                                  <input 
                                                            type='password' 
                                                            name='psw' 
                                                            placeholder='password'
                                                            onChange={(e) => setPsw(e.target.value)}
                                                                                                                    value={Psw}
                                                            className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                            ></input>
                                                  
                                                  <div className='flex justify-between'>
                                                            <button 
                                                            type='submit'
                                                            className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  '
                                                            >Log in</button>

                                                            <button className='mt-10   text-blue-500 hover:text-blue-700  font-bold py-2 px-4 rounded '>Forgot your password??</button>
                                                  </div>
                                                  <div className='text-red-900 font-bold text-2xl mt-10'>{error1}</div>
                                                  <div>
                                                  <NavLink to="/register">
                                                  <button className='text-blue-500 hover:text-blue-700  mt-6  font-bold '>new here?</button>
                                                  </NavLink>
                                                  
                                                  </div>
                                        </form>
                              
                              
                    </div>
          </div>
                    <div className='flex justify-center'>
                              
                    </div>
          </section>
</>
  )
}

export default AdminLogin