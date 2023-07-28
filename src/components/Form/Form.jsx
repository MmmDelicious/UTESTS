import React, { useState } from 'react'
import './Form.css'
export const Form = ({title,handleClick}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  return (
    <div className='form-wrap'>
        <input className="input" type="email" placeholder='email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className="input" type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button  className="button" onClick={() => handleClick(email,password)}>{title}</button>
    </div>
  )
}
