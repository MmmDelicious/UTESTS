import React, { useEffect, useState } from 'react'
import './TaskPage.css'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import task from './tasks/i1.png'
import { Link } from 'react-router-dom'
import { Task } from '../Task/Task'
import { Modal } from '../Modal/Modal'
import { getFirestore, collection, getDocs,doc, setDoc, updateDoc,getDoc,arrayUnion } from 'firebase/firestore/lite';
import { useAuth } from '../../hooks/use-auth'
import {db} from '../../firebase.js'
import { mainPool } from './Pool'
export const TaskPage = ({children}) => {
   
      
    
    let {category,number} = useParams()
    let [currentTask,setCurrentTask] = useState('')
    let [value,setValue] = useState("")
    const [rememberAnswer,setRememberAnswer] = useState(0)
    const [modalActive,setModalActive] = useState(false)
    const history = useNavigate()
    let {isAuth,email} = useAuth()
    let navigate = useNavigate()
    let type = category === "Integrals" ? "Интеграл" : category === "Limits" ? "Предел" : "Частная производная"
    let [answerPool,setAnswerPool] = useState([
      {key: 1, value: null , correctAnswer: null},
      {key: 2, value: null , correctAnswer: null},
      {key: 3, value: null , correctAnswer: null},
      {key: 4, value: null , correctAnswer: null},
      {key: 5, value: null , correctAnswer: null},
      {key: 6, value: null, correctAnswer: null},
      {key: 7, value: null , correctAnswer: null},
      {key: 8, value: null , correctAnswer: null},
    ])
    let [counter,setCounter] = useState(0)
    let [pool,setPool] = useState(mainPool)

    const toggleActive = () => {
      setModalActive(true)
    }
    
    
    function generate(type){
      let filtredTasks = pool.filter((task) => task.type === type)
      let randomize = []
      let remindId = []
      let taskCounter = 0
      while(taskCounter != 8){
        let candidate = filtredTasks[Math.floor(Math.random() * filtredTasks.length)]
        if(!remindId.includes(candidate.id)){
          remindId.push(candidate.id)
          randomize.push(candidate)
        } else {
          continue
        }
        taskCounter++
      }

      return randomize
      
    }


    useEffect(() => {
      setCounter(0)
    },[])

    useEffect(() => {
      setRememberAnswer(answerPool[number - 1].value === null ? 0 : answerPool[number - 1].value)
      setCurrentTask(generateTasks[number - 1].url)
      console.log(answerPool)
      
    },[number,answerPool])
    useEffect(() => {
      console.log(counter)
    },[counter])
    async function updateData(db) {
    
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);   
      
      if (docSnap.exists()) {
       
        await updateDoc(docRef, {
          'results': arrayUnion({id:docSnap.data().results.length + 1,testType:type,total:counter,mark:100 * counter / 8 > 85 ? 5 : 100 * counter / 8 > 60 ? 4 : 100 * counter / 8 > 45 ? 3 : 2}),
          
      });
        console.log("Document data:", docSnap.data().results.length);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    let addAnswerPool = (value) => {
     
        const currentPool = answerPool.map((elem,index )=> elem.key === +(number)? {key:elem.key,value:+(value),correctAnswer:generateTasks[number - 1].answer}: elem)
    
        setAnswerPool(currentPool)
        history(`/Test/${category}/${+number + 1}`)
    
      setValue('')
    }
    
    let saveAnswerPool = (value) => {

      const currentPool = answerPool.map((elem,index )=> elem.key === +(number)? {key:elem.key,value:+(value),correctAnswer:generateTasks[number - 1].answer}: elem)
      setAnswerPool(currentPool)
      
      currentPool.forEach(elem => {
        if(+(elem.value) == +(elem.correctAnswer) && elem.value != null){
         setCounter(counter++)
        return counter
      }})
      setCounter(counter)


   
      try{
        updateData(db)
       } catch(e){
        console.log(e)
       }
     
      toggleActive()
     
    }
    
  

    let [generateTasks,setGenerateTasks] = useState(generate(category))




    




  return (
    <div className='taskpage'>
        {
        parseInt(number) !== generateTasks.length?
        <Task rememberAnswer={rememberAnswer}toggleActive = {toggleActive} saveAnswerPool={saveAnswerPool} number={number} currentTask={currentTask} addfunc={addAnswerPool} value={value} setValue={setValue}/>
        :
        <Task rememberAnswer={rememberAnswer}toggleActive = {toggleActive} saveAnswerPool={saveAnswerPool} number={number} currentTask={currentTask} addfunc={saveAnswerPool} value={value} setValue={setValue} />
      }
        <div className="btn-wrap">
        {generateTasks.map((task,index) => {
            return <Link className='taskbtn' to={`/Test/${category}/${index + 1}`} key={task.id} >{index + 1}</Link>
        })}
        </div>
        <Modal active={modalActive} setActive={setModalActive}> 
          <div className="content">
            <h2>Тест завершен!</h2>
            <div className="answer">
            Правильных ответов: {counter}
            <br />
            Оценка: {100 * counter / 8 > 85 ? 5 : 100 * counter / 8 > 60 ? 4 : 100 * counter / 8 > 45 ? 3 : 2}
            <Link className='ansbtn' to={`/Result`} onClick={() => console.log(counter)} state={{ counter:counter,type:category === 'Integrals' ?"Интеграл":category === 'Limits'?'Предел':'Частная производная' }}>К результатам</Link>
            </div>
           
          </div>
          
        </Modal>
    </div>
  )
}
