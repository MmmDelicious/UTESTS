import React, { useEffect, useState } from 'react'
import './TestPage.css'
import { Link } from 'react-router-dom'
export const TestPage = ({tasks}) => {


  return (
    <div className='TestPage'>
      <div className="test-wrapper">
        <Link to="/Test/Integrals" className="category-link">Тест по интегралам</Link>
        <Link to="/Test/Limits" className="category-link">Тест по пределам</Link>
        <Link to="/Test/Derivative" className="category-link">Частные производные</Link>
        </div>
    </div>
  )
}
