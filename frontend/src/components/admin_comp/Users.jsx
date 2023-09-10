import React from 'react'
import Usercard from './usercard'
function Users(users) {
  
  return (
   <>
    <div className='flex justify-start flex-wrap p-5 '>
    {
      users.map( (user) =>{
       return(
        <div>
        {Usercard(user)}
      </div>
       )
      })
   }
    </div>
   </>
  )
}

export default Users