import React from 'react'

function Facilitiess(facilities) {
  
  
  const Input = () => {
    return (
      facilities.map((facilities) => {
        return (
          <>
            <div key={facilities._id} className='flex flex-col rounded shadow-2xl shadow-green-600 bg-green-200 m-1 p-5'>
              <h1 className=' text-3xl p-2 font-bold'>Facility Name:</h1>
              <h1 className=' text-2xl p-2'>{facilities.name}</h1>
              <h1 className=' text-3xl font-bold p-2 '>Facility willaya:</h1>
              <h1 className=' text-2xl p-2 '>{facilities.wilaya}</h1>
              <h1 className=' text-3xl font-bold p-2 '>Facility adress:</h1>
              <h1 className=' text-2xl p-2 '>{facilities.adr}</h1>
            </div>
          </>
          // <option key={facilities._id} value={facilities._id}>{facilities.name}</option>
        )
      }));
  }
  return (
    <>
      <div className='flex justify-start flex-wrap p-5'>
        
          <Input />
        
      </div>
    </>

  )
}

export default Facilitiess