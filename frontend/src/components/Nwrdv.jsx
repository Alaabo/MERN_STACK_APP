import React , {useState}from 'react'
import axios from 'axios'

function Nwrdv() {
  const [facilities , setFac] = useState([])
  let fac , type , dt
  const url2 = 'http://localhost:3030/api/facility/'
  const url1 = 'http://localhost:3030/api/rdv/new'
  const GetFac =  (wil) => {
    try {
              axios.get(url2+wil)
                        .then((res)=>{
                              
                            setFac(res.data)
                        })
    } catch (error) {
              return error
    }
}
  ////////////////////////////
  const Input = () => {
    return (
              facilities.map((facilities) => {
                        return (
                                  <option key={facilities._id}  value={facilities._id}>{facilities.name}</option>
                               
                        )
              }));
}
 function handleReservation() {
    const rdvBody = {
      client : localStorage.getItem('id') ,
      facility : fac ,
      tp : type ,
      date :  dt
    }
    try {
      axios.post(url1,rdvBody)
        .then((res)=>{
          alert(res.data)
          window.location = '/user/dashboard'
        })
    } catch (error) {
      alert('spmething went wrong')
    }
 }
  return (
    <>
    <div className='bg-green-200 flex justify-center items-center p-10 h-screen w-screen'>
            <div className='w-1/2 p-5'>
                <h1 className='font-bold text-4xl'>Session reservation area</h1>
                <p>-To be clear about the process your order to reserve a session will be confirmed by a call later from the facility you need</p>
                <p>-You can only confirm or delete your reservation and it can't be delayed instead in case there is somthing prevent you from making it we recommend you to delete your reservation to let place free for others</p>
             </div>
             <div className='w-1/2 p-5 bg-blue-700 bg-opacity-50 rounded-3xl '>
             <select
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-5'
                    onChange={(e) => {GetFac(e.target.value)}}
                    
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
                <select 
                onChange={(e)=>{fac = e.target.value}}
                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  my-5'>
                <option  value=''>Please select facility</option>
                  <Input/>
                </select>
                <select 
                onChange={(e)=>{type = e.target.value}}
                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  my-5'>
                <option  value=''>Please select session type</option>
                <option  value='test'>Test</option>
                <option  value='vaccination'>vaccine</option>
                  
                </select>
                <input
                className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md  my-5'
                 type='date'
                 onChange={(e)=>{dt = e.target.value}}
                 ></input>
                <button
                className='bg-white bg-opacity-40  py-2 px-4 rounded-3xl text-2xl font-semibold shadow-2xl shadow-gray-600 hover:bg-slate-900 hover:bg-opacity-40 my-5'
                onClick={()=> handleReservation()}
                >Reserve</button>
             </div>
    </div>
    </>
  )
}

export default Nwrdv