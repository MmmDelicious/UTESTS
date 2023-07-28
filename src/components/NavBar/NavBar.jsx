import React, { useState } from 'react'
import './NavBar.css'
import { Link, Navigate, Route, Routes, redirect, useNavigate } from 'react-router-dom'
import { removeUser } from '../../store/slices/userSlice'
import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux'


export const NavBar = () => {
  const dispatch = useDispatch()
  const {isAuth,email} = useAuth()
  const history = useNavigate()
  
  const logOut = () => {
    dispatch(removeUser())
    history('/login')
  }

  return (
    <div className='container'>
        <Link className="logo" to="/">
            UTESTS
        </Link>
        { 
        isAuth?
        <>
        <div className="links">
            <Link className="link" to="/Table">Таблицы</Link>
            <Link className="link" to="/Result">Результаты</Link>
            <Link className="link" to="/Test">Тесты</Link>
        </div>
      
        <div className="buttons">
           <button className="btn" onClick={logOut}>Выйти</button>
        </div>
          </>
        :
        <>
        <div className="links">
        <Link className="link" >Таблицы</Link>
        <Link className="link" >Результаты</Link>
        <Link className="link" >Тесты</Link>
    </div>
        <div className="buttons">
          <Link className="btn " to="/register">Регистрация</Link>
          <Link className="btn whitebtn " to="/login">Авторизация</Link>
        </div>    
        <Routes>
          <Route path='/' element={<Navigate replace to='/login' />} />
      </Routes>     
        </>
}
    </div>
  )
}
