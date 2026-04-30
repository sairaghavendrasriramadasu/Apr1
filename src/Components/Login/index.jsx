import React, { useContext, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../Context'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const { setIslogin } = useContext(DataContext)
  

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
    <main className='main-container'>
      <div className='loginpage-main-container'>
        <div className='login-header'>
          <p className='login-eyebrow'>Welcome back</p>
          <h1 className='login-title'>Sign in</h1>
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Enter your email' className='input-style' />
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Enter your password' className='input-style' />
        </div>

        <button onClick={() => login()} className='signin-button'>Sign In</button>

        {
          error && <p className='error-message'>Please enter email and password</p>
        }
      </div>
    </main>
  )
}
