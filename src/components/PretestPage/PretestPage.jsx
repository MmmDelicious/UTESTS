import React from 'react'
import { useParams } from 'react-router-dom'
import './PretestPage.css'
import { Link } from 'react-router-dom'

export const PretestPage = ({}) => {
    const {category} = useParams();
    console.log(category)
  return (
    <div className='pretestPage'>
        {
            category === "Integrals" 
            ?
            <div className="wrapper">
                <div className="text">
                Этот тест позволяет проверить знание и понимание студентов в области интегрального исчисления.
                    Тест по интегралам состоит из 8 заданий, в которых студентам предлагается решить 
                    различные задачи и вычислить значения определенных интегралов.
                  
                    <br />
                    Время на тест: 45 мин
                    <br />
                    Количество заданий:8
                    <br />
                    P.S Все нецелые ответы необходимо округлить до сотых!!!
            
                    
                </div>
                <div className="btnwrap">
                    <Link to={`/Test/Integrals/${1}`} className="startbtn">Начать тест</Link>
                </div>
            </div>
            :category === "Limits" 
            ?
            <div className="wrapper">
                <div className="text">
            
                Тест по пределам является частью курса математического анализа и проверяет знание студентами понятия предела функции.
                Он состоит из 8 практических заданий разной сложности.Удачи!
  
            
                <br />
                Время на тест: 45 мин
                <br />
                Количество заданий:8
                <br />
                P.S Все нецелые ответы необходимо округлить до сотых!!!
               
                </div>
                <div className="btnwrap">
                    <Link to={`/Test/Limits/${1}`} className="startbtn">Начать тест</Link>
                </div>
            </div>
            
            :
            <div className="wrapper">
                <div className="text">
            
                Тест по частным производным является частью курса математического анализа и проверяет знание студентами понятия частной производной.
                Он состоит из 8 практических заданий разной сложности.Удачи!
           
            
                <br />
                Время на тест: 45 мин
                <br />
                Количество заданий:8
                <br />
                P.S Все нецелые ответы необходимо округлить до сотых!!!
            
               
                </div>
                <div className="btnwrap">
                    <Link to={`/Test/Derivative/${1}`} className="startbtn">Начать тест</Link>
                </div>
            </div>
        }
    </div>
  )
}
