import React from 'react'
import {Link} from 'react-router-dom'
import { Login } from '../Login/Login'
export const LoginPage = () => {
  return (
    <div className="wrap">
    <div className='form'>
      <h1>Авторизация</h1>
      <Login/>
      <p>
      <Link className='redirect' to={"/register"}>Регистрация</Link>
      </p>
      
    </div>
    </div>
  )
}
