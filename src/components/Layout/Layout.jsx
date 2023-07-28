import React from 'react'
import {NavBar} from '../NavBar/NavBar.jsx'
import {Outlet,NavLink} from 'react-router-dom'
import './Layout.css'


export const Layout = () => {
  return (
    <div className="layout">
        <NavBar/>
        <main className='main-content'>
            <Outlet />
        </main>
    </div>
  )
}
