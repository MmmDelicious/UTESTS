import React from 'react'
import itable from '../../assets/img/Table12.png'
import ltable from '../../assets/img/Table22.png'
import formule from '../../assets/img/formul.png'
import form1 from '../../assets/img/form1.png'
import './Table.css'
export const Table = () => {
  return (
    <div className="table">
    <div className="itable">
        <h1 className='ihead'>Таблица интегралов</h1>
        <img className="img" src={itable} alt="" />
      </div>
      <div className="ltable">
      <div className="wrp">
        <h1 className='ihead'>Формула Ньютона-Лейбница</h1>
        <img className="img2" src={formule} alt="" />
        </div>
        <div className="wrp">
        <h1 className='ihead'>Интегрирование по частям</h1>
        <img className="img3" src={form1} alt="" />
        </div>
      </div>
      <div className="ptable">
        <h1 className='ihead'>Пределы</h1>
        <img className="img" src={ltable} alt="" />
      </div>
     
      </div>
  )
}
