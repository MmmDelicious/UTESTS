import React, { useState } from 'react'
import { redirect,Route,Routes,Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import { useDispatch } from 'react-redux'
import { LoginPage } from '../LoginPage/LoginPage'
import {db} from '../../firebase.js'
import { getFirestore, collection, getDocs,doc, setDoc, updateDoc,getDoc,arrayUnion } from 'firebase/firestore/lite';
import './MainPage.css'
export const MainPage = () => {


  async function getRes(db){
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef); 
    if (docSnap.exists()) {
      
      setTotalTests(docSnap.data().results.length)
      setGreatTests(docSnap.data().results.filter((test) => test.mark == 5).length)
      setGoodTests(docSnap.data().results.filter((test) => test.mark == 4).length)
      setNormTests(docSnap.data().results.filter((test) => test.mark == 3).length)
      setBadTests(docSnap.data().results.filter((test) => test.mark == 2).length)
  
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  let [totalTests,setTotalTests] = useState(0)
  let [greatTests,setGreatTests] = useState(0)
  let [goodTests,setGoodTests] = useState(0)
  let [normTests,setNormTests] = useState(0)
  let [badTests,setBadTests] = useState(0)
  const {isAuth,email} = useAuth()
  const citiesRef = collection(db, "users");
  let [loading,setLoading] = useState(true)
  let [result,setResul] = useState(totalTests < 3 ? "Вы только начинаете свой путь в решении задач по высшей математике. Не стоит тянуть время садитесь и начинайте тренироваться!"
                                                   : greatTests > 5 ? "У вас большой багаж знаний за спиной, большинство контрольных и тестовых работ будут даваться вам с легкостью"
                                                   : goodTests || normTests >= 3 ? "Вы делаете успехи в решении задач, но ваших результатов пока не достаточно для того чтобы уверено чувствовать себя на экзаменах"
                                                   : badTests >= 2 && totalTests < 5 ? "Ваши результаты ужасны!, но не стоит расстраиваться возможно математика просто не для вас попробуйте себя в музыке"
                                                   : "Не забываем решать задачки!")
  getRes(db)

  return isAuth ? (
    <div className='main-page'>
        <div className="text">
            <p>
              Добро пожаловать на сайт-тренажер по высшей математике, на этом сайте вы сможете отточить свои навыки в решении определенных интегралов, пределов последовательности и частных производных.Удачи!
                <div className="results">
                <div className="block">
                 Всего решено тестов:{totalTests}
                </div>
               
               
                <div className="block">
                Тестов на отлично:{greatTests}
                </div>
               
              
                <div className="block">
                Тестов на хорошо:{goodTests}
                </div>
               
              
                <div className="block">
                Тестов на удволитворительно:{normTests}
                </div>
            
              
                <div className="block">
                Заваленных тестов:{badTests}
                </div>
              
                </div>
                Вывод: {result} 
            </p>
        </div>
    </div>
  ) : (  <Routes>
          <Route path='/' element={<Navigate replace to='/login' />} />
      </Routes>
    )

  
}
