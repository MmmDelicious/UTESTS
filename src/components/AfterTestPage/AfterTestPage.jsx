import React from 'react'
import { useLocation } from 'react-router-dom'

export const AfterTestPage = () => {

  let location = useLocation()


  console.log(location.state)

  return (
    <div>Тест завершен ваш результат:
      <p>Верных ответов:{location.state.total}</p>
    </div>
  )
}
