import React from 'react'

function Usercard(user) {
  return (
    <>
      <div key={user._id} className='flex flex-col rounded shadow-2xl shadow-green-600 bg-green-200 m-1 p-5'>
          <h1 className=' text-2xl px-2 font-bold ' >User ID</h1>
          <h1 className='px-2 font-bold text-gray-800'>{user._id}</h1>

          <h1 className=' text-2xl px-2 font-bold '>Username</h1>
          <h1 className='px-2 font-bold text-gray-800'>{user.un}</h1>

          <h1 className=' text-2xl px-2 font-bold '>User Role</h1>
          <h1 className='px-2 font-bold text-gray-800'>{user.grade}</h1>

          <h1 className=' text-2xl px-2 font-bold '>Facility</h1>
          <h1 className='px-2 font-bold text-gray-800'>{user.facility.name}</h1>
      </div>
    </>
  )
}

export default Usercard