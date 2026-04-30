import React, { useContext, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context'

export default function Login() {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const {setIslogin} = useContext(DataContext)
  

  const navigate = useNavigate()

  
  const login = () => {
    if (email.length <= 0 && password.length <= 0) {
      console.log(email.length);
      setError(true)
    } else if (email.length <= 0 || password.length <= 0) {
      setError(true)
    } else {
      navigate('/')
      setIslogin(true)
    }

  }

  console.log(email, password);
  return (
    <div>
        <div className='main-container'>
            <div className='loginpage-main-container'>
              <div>
                <label>Email</label> <br />
                <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Enter your Email' className='input-style' />
              </div>
              <div>
                <label>Password</label> <br />
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Enter your Password' className='input-style' />
              </div>
              <div>
                <button onClick={() => login()} className='signin-button'>Sign In</button>
              </div>
              {
                error && <p className='error-message'>Please Enter Email or Password</p>
              }
            </div>
          </div>
    </div>
  )
}