import React from 'react'
import {Link} from 'react-router-dom'
import { SignUp } from '../SignUp/SignUp'
import './RegisterPage.css'
export const RegisterPage = () => {
  return (
    <div className="wrap">
    <div className='form'>
          <h1>Регистрация</h1>
          <SignUp/>
      <p>
      <Link to={"/login"}>Авторизация</Link>
      </p>
    </div>
    </div>
  )
}
