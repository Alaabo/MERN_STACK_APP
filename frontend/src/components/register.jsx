import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Register() {
  const [fn, setFn] = useState('')
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [cpsw, setCPsw] = useState('')
  const [adr, setAdr] = useState('')
  const [bd, setbd] = useState('')
  const [phn, setphn] = useState('')
  const [wilaya, setwilaya] = useState('')
  const [id, setId] = useState('')
  const [error, setError] = useState([])
  const url = "http://localhost:3030/api/client/new"
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
              idn: id
            }).then((res) => {
    
              if (res.data === 'registred') {
                window.location = '/login'
                alert(res.data)
              } else {
                setError([res.data])
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
  return (
    <>
      <section className='bg-green-200 '>
        <div className='flex justify-center items-center h-screen '>
          <div className='bg-green-300 p-10 '>
            <h1 className='text-3xl font-bold text-blue-500'>Register</h1>
            <form onSubmit={handleSubmit} className=' flex flex-col justify-center bg-green-300 p-5'>
              <div className='flex justify-evenly my-2'>
                <div className='mx-3 '>
                  <h1>
                    Full Name
                  </h1>
                  <input
                    type='text'
                    name='fn'
                    placeholder='Full Name'
                    onChange={(e) => setFn(e.target.value)}
                    value={fn}
                    className='  shadow  border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md '
                  ></input>
                </div>

                <div className='mx-3'>
                  <h1>
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
              </div>
              <div className='flex justify-evenly my-2'>
                <div className='mx-3'>
                  <h1>
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

                <div className='mx-3'>
                  <h1>
                    Confirm your password
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
              </div>
              <div className='flex justify-evenly my-2'>

                <div className='mx-3'>
                  <h1>
                    Adress line
                  </h1>
                  <input
                    type='text'
                    name='adr'
                    value={adr}
                    onChange={(e) => setAdr(e.target.value)}
                    placeholder='Adress'
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
                </div>
                <div className='mx-3'>
                  <h1>
                    ID Number
                  </h1>
                  <input
                    type='text'
                    name='adr'
                    required
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder='Adress'
                    className='  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500 focus:shadow-md'
                  ></input>
                </div>

              </div>
              <div>
                <div className='mx-3'>
                  <h1>
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
              </div>
              <div className='flex justify-evenly my-2'>
                <div className='mx-3'>
                  <h1>
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


                <div className='mx-3'>
                  <h1>
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
              </div>
              <div>{error}</div>
              <button
                type='submit'
                className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  '
              >Register</button>
              <NavLink to="/login">
                <button className='mt-10   text-blue-500 hover:text-blue-700  font-bold py-2 px-4 rounded '>Already Have Account ??</button>
              </NavLink>
            </form>

          </div>
        </div>
      </section>

    </>
  )
}

export default Register
