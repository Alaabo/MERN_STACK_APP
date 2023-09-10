import React from 'react'
import axios from 'axios'

function NewAccount(facilities) {
          let var1, var2, var3, var4
          const token = localStorage.getItem('token')
          const url = 'http://localhost:3030/api/user/new'
          const handleSubmit1 = (e) => {
                    e.preventDefault()
                    try {
                              axios.post(url, { un: var1, psw: var2, grade: var3, facility: var4 }, { headers: { "authorization": `Bearer ${token}` } })
                                        .then((response) => {
                                                  alert(JSON.stringify(response.data))
                                                  window.location.reload();
                                        })
                    } catch (error) {
                              alert(error)
                    }
          }
          const Input = () => {
                    return (
                              facilities.map((facilities) => {
                                        return (
                                                  <option key={facilities._id} value={facilities._id}>{facilities.name}</option>
                                        )
                              }));
          }
          return (
                    <><div className='flex flex-col  h-full p-10'>
                              <div>
                                        <h1 className='text-7xl text-gray-800 p-4'>Add New User Account...</h1>
                              </div>
                              <div className='w-full flex justify-center items-center h-full'>
                                        <div className='w-1/2 h-2/3 bg-green-200 p-10'>
                                                  <form onSubmit={handleSubmit1} method="post">
                                                            <div>
                                                                      <h1>
                                                                                UserName
                                                                      </h1>
                                                                      <input
                                                                                type='text'
                                                                                name='un'
                                                                                defaultValue={var1}
                                                                                onChange={(e) => var1 = e.target.value}
                                                                                className='  shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                                                required
                                                                      >
                                                                      </input>
                                                            </div>
                                                            <div>
                                                                      <h1>
                                                                                Password
                                                                      </h1>
                                                                      <input
                                                                                type='password'
                                                                                name='psw'
                                                                                onChange={(e) => { var2 = e.target.value }}
                                                                                defaultValue={var2}
                                                                                required
                                                                                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                                      >
                                                                      </input>
                                                            </div>
                                                            <div>
                                                                      <h1>
                                                                                Role
                                                                      </h1>
                                                            </div>
                                                            <div>
                                                                      <select
                                                                                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                                                onChange={(e) => { var3 = e.target.value }}
                                                                                value={var3}
                                                                      >
                                                                                <option value=""  >Select a role</option>
                                                                                <option value="Doctor"  >Doctor</option>
                                                                                <option value="Assisstant">Assisstant</option>
                                                                                <option value="Stock Manager">Stock Manager</option>
                                                                      </select>
                                                            </div>
                                                            <div>
                                                                      <h1>
                                                                                Facility
                                                                      </h1>
                                                            </div>
                                                            <div>
                                                                      <select
                                                                                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                                                                onChange={(e) => { var4 = e.target.value }}
                                                                                value={var4}
                                                                      >
                                                                                <option value=''>please select facility</option>
                                                                                <Input />
                                                                      </select>
                                                            </div>
                                                            <button type='submit' className='my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  '>add</button>
                                                  </form>
                                        </div>
                              </div>
                    </div></>
          )
}

export default NewAccount

