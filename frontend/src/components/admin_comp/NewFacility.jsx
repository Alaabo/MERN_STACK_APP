import React from 'react'
import axios from 'axios'
function NewFacility() {
  let var1 , var2 , wilaya
  const url = 'http://localhost:3030/api/facility/new'
  const handleSubmit2 = (e) => {
    e.preventDefault()
    try {
      axios.post(url,{name : var1 , adr:var2 , wilaya :wilaya})
        .then((res)=>{
          if(res.data === 'facility added succesfuly')
            {
              alert(res.data)
              window.location.reload();
            }else{
              alert('somthing went wrong')
            }
        })
    } catch (error) {
      
    }
  }
  return (
    <><div className='flex flex-col  h-full p-10'>
      <div>
        <h1 className='text-7xl text-gray-800 p-4'>Add New Facility...</h1>
      </div>
      <div className='w-full flex justify-center items-center h-full'>
        <div className='w-1/2 h-2/3 bg-green-200 p-10'>
          <form onSubmit={handleSubmit2} method="post">
            <div>
              <h1>
                Facility Name
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
            <div className='mx-3'>
                  <h1>
                    Willaya
                  </h1>
                  <select
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => { wilaya =e.target.value }}
                    value={wilaya}
                    required
                  >
                    <option value='please select your willaya'>please select your willaya</option>
                    <option value='Adrar'>Adrar</option>
                    <option value='Chlef'>Chlef</option>
                    <option value='Laghouat'>Laghouat</option>
                    <option value='Oum-el-Bouaghi'>Oum-el-Bouaghi</option>
                    <option value='Batna'>Batna</option>
                    <option value='Béjaïa'>Béjaïa</option>
                    <option value='Biskra'>Biskra</option>
                    <option value='Béchar'>Béchar</option>
                    <option value='Blida'>Blida</option>
                    <option value='Bouira'>Bouira</option>
                    <option value='Tamanghasset'>Tamanghasset</option>
                    <option value='Tébessa'>Tébessa</option>
                    <option value='Tlemcen'>Tlemcen</option>
                    <option value='Tiaret'>Tiaret</option>
                    <option value='Tizi-Ouzou'>Tizi-Ouzou</option>
                    <option value='Algiers'>Algiers</option>
                    <option value='Djelfa'>Djelfa</option>
                    <option value='Jijel'>Jijel</option>
                    <option value='Sétif'>Sétif</option>
                    <option value='Saïda'>Saïda</option>
                    <option value='Skikda'>Skikda</option>
                    <option value='Sidi-Bel-Abbes'>Sidi-Bel-Abbes</option>
                    <option value='Annaba'>Annaba</option>
                    <option value='Guelma'>Guelma</option>
                    <option value='Constantine'>Constantine</option>
                    <option value='Médéa'>Médéa</option>
                    <option value='Mostaganem'>Mostaganem</option>
                    <option value='Msila'>Msila</option>
                    <option value='Mascara'>Mascara</option>
                    <option value='Ouargla'>Ouargla</option>
                    <option value='Oran'>Oran</option>
                    <option value='El-Bayadh'>El-Bayadh</option>
                    <option value='Illizi'>Illizi</option>
                    <option value='Bordj-Bou-Arréridj'>Bordj-Bou-Arréridj</option>
                    <option value='Boumerdès'>Boumerdès</option>
                    <option value='El-Taref'>El-Taref</option>
                    <option value='Tindouf'>Tindouf</option>
                    <option value='Tissemsilt'>Tissemsilt</option>
                    <option value='El-Oued'>El-Oued</option>
                    <option value='Khenchela'>Khenchela</option>
                    <option value='Souk-Ahras'>Souk-Ahras</option>
                    <option value='Tipaza'>Tipaza</option>
                    <option value='Mila'>Mila</option>
                    <option value='Aïn-Defla'>Aïn-Defla</option>
                    <option value='Naâma'>Naâma</option>
                    <option value='Aïn-Témouchent'>Aïn-Témouchent</option>
                    <option value='Ghardaïa'>Ghardaïa</option>
                    <option value='Relizane'>Relizane</option>
                    <option value='Bordj-Badji-Mokhtar-Province'>Bordj-Badji-Mokhtar-Province</option>
                    <option value='In-Salah'>In-Salah</option>
                    <option value='Djanet'>Djanet</option>
                    <option value='In-Guezzam'>In-Guezzam</option>
                    <option value='El-MGhair'>El-MGhair</option>
                    <option value='Touggourt'>Touggourt</option>
                    <option value='Béni-Abbès'>Béni-Abbès</option>
                    <option value='Timimoun'>Timimoun</option>
                    <option value='Ouled-Djel'>Ouled-Djel</option>
                    <option value='El-Menia'>El-Menia</option>
                  </select>
                </div>
            <div>
              <h1>
                Adress
              </h1>
              <input
                type='text'
                name='psw'
                onChange={(e) => { var2 = e.target.value }}
                defaultValue={var2}
                required
                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              >
              </input>
            </div>
            
            <button type='submit' className='my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  '>add</button>
          </form>
        </div>
      </div>
    </div></>
  )
}

export default NewFacility