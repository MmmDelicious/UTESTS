import React, { useEffect, useState } from 'react'
import './Task.css'
export const Task = ({number,currentTask,addfunc,value,setValue,saveAnswerPool,toggleActive,rememberAnswer}) => {

  const [timeLeft,setTimeLeft] = useState(60*45)
  const [isCounting,setIsCounting] = useState(false)

  const getPadTime = (time) => time.toString().padStart(2,'0')
  const minutes = getPadTime(Math.floor(timeLeft / 60))
  const seconds = getPadTime((timeLeft - minutes * 60))
  useEffect(() => {
    
    const interval = setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft >= 1? timeLeft - 1 : 0))

    },1000)
    if(timeLeft === 0){
      toggleActive()
    }
    return () => clearInterval(interval);
  },[isCounting,timeLeft])

  return (
    <div className="task-wrap">
          <h2>{number}.</h2>  
          <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
          </div>
          <img className='task' src={currentTask} alt="" />
          <div className="input-wrap">
          Ответ:<input 
          type="number" 
          name="" 
          id="" 
          value={value}
          onChange={(e) => {setValue(e.target.value)}}
          className='inp'
          placeholder={rememberAnswer}
          />
          <button className='ans' onClick={() => addfunc(value)}>{parseInt(number) === 8 ? "Завершить тест": "Coхранить ответ"}</button>
          </div>
        </div>
  )
}
