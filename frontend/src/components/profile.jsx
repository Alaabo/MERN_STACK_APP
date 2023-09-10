import React , {useEffect, useState}from 'react'
import axios from 'axios'
function Profile() {
  const [fn, setFn] = useState('')
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [cpsw, setCPsw] = useState('')
  const [adr, setAdr] = useState('')
  const [bd, setbd] = useState('')
  const [phn, setphn] = useState('')
  const [wilaya, setwilaya] = useState('')
  const [error, setError] = useState([])
  const [vaccines , setVac] = useState([])
  const url = `http://localhost:3030/api/client/update/${localStorage.getItem('id')}`
  const urlvac = `http://localhost:3030/api/session/vaccine/passport/${localStorage.getItem('id')}`
  useEffect(()=>{
          try {
                    axios.get(urlvac)
                              .then((res)=>{
                                        setVac(res.data)
                              })
          } catch (error) {
                    
          }
  },[urlvac])
  const handleSubmit = (e) => {
          e.preventDefault()
          if (phn.length === 10) {
            if (psw === cpsw) {
              if(!(wilaya === '' || wilaya === 'please select your willaya')){
                try {
                  axios.post(url, {
                    fn: fn,
                    email: email,
                    psw: psw,
                    bd: new Date(bd),
                    adr: adr,
                    phn: phn,
                    wilaya: wilaya,
                  }).then((res) => {
          
                    if (res.data === 'registred') {
                      window.location = '/login'
                      alert(res.data)
                    } else {
                      setError(res.data)
                    }
          
          
                  })
                } catch (error) {
                  setError(error)
                }
              } else {
                setError('please select your willaya correctly')
              }
              }else{setError('please confirme that you entred matched passwords')}
          } else {
            setError('please enter correct phone')
          }
        }
          function profile() {
                    return(
                              <>
          <form onSubmit={handleSubmit} className=' flex flex-col justify-center bg-green-300 p-2 w-full '>

                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Full Name
                  </h1>
                  <input
                    type='text'
                    name='fn'
                    placeholder='Full Name'
                    onChange={(e) => setFn(e.target.value)}
                    value={fn}
                    className='   shadow  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md '
                  ></input>
                </div>

                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3' >
                    Email
                  </h1>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
              </div>
                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Password
                  </h1>
                  <input
                    type='password'
                    name='psw'
                    value={psw}
                    onChange={(e) => setPsw(e.target.value)}
                    placeholder='Password'
                    className='  shadow  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md '
                  ></input>
                </div>

                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Confirm password
                  </h1>
                  <input
                    type='password'
                    name='password'
                    value={cpsw}
                    onChange={(e) => setCPsw(e.target.value)}
                    placeholder='password'
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
              </div>
                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Address line
                  </h1>
                  <input
                    type='text'
                    name='adr'
                    value={adr}
                    onChange={(e) => setAdr(e.target.value)}
                    placeholder='Address'
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
                </div>
              
                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Willaya
                  </h1>
                  <select
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    onChange={(e) => { setwilaya(e.target.value) }}
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
                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Phone Number
                  </h1>
                  <input
                    type='text'
                    name='phn'
                    value={phn}
                    onChange={(e) => setphn(e.target.value)}
                    placeholder='+213-xxx-xxx-xxx'
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
                </div>


                <div className='mx-3 flex p-2'>
                  <h1 className='w-1/3'>
                    Birthdate
                  </h1>

                  <input
                    type='Date'
                    name='bd'
                    value={bd}
                    onChange={(e) => setbd(e.target.value)}
                    className='  shadow  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md '
                  ></input>
                </div>
              <div className='font-bold text-red-500 mx-3 p-2'>{error}</div>
              <button
                type='submit'
                className='my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  '
              >Update</button>
              
            </form>
                              </>
                    )
          }
          function vaccinepassport () {
                    if(vaccines.length === 0){
                              return(
                                        <>
                                                  <h1>No Passport Yet !</h1>
                                        </>
                              )
                    }else{
                              return(
                                        vaccines.map((vac)=>{
                                                  return(
                                                            <>
                                                                      <div key={vac._id} className=' rounded shadow-2xl shadow-green-600 bg-green-300 bg-opacity-50  p-5'>
                                                                                <div>
                                                                                <h1>vacine id: {vac._id}</h1>
                                                                                <h1>facility: {vac.facility.name}</h1>
                                                                                <h1>doctor signature:{vac.user._id}</h1>
                                                                                <h1>Date stamp :<br></br> {Date(vac.date)}</h1>
                                                                                </div>
                                                                      </div>
                                                            </>
                                                  )
                                        })
                              )
                    }
          }
  return (
    <>
          <button 
          onClick={()=>{window.location = '/user/dashboard'}}
          className='text-xl font-bold px-10'>Dashboard</button>
          <div className='flex w-screen h-screen px-4'>
                    <div className=' flex flex-col justify-center  w-1/3 px-5 '>
                    <h1 className='font-bold text-2xl'>Vaccine Passport</h1>
                              {vaccinepassport()}
                    </div>
                    <div className='w-2/3 flex flex-col justify-center px-10'>
                              
                              {profile()}
                             
                    </div>
          </div>
    </>
  )
}

export default Profile