import React, { useEffect, useState } from 'react'
import './ResultPage.css'
import { useLocation } from 'react-router-dom'
import { getFirestore, collection, getDocs,doc, setDoc, updateDoc,getDoc,arrayUnion } from 'firebase/firestore/lite';
import { useAuth } from '../../hooks/use-auth'
import {db} from '../../firebase.js'
import './ResultPage.css'
import {Oval} from 'react-loader-spinner'
export const ResultPage = () => {


    let [results,setResults] = useState([])
    let [loading,setLoading] = useState(true)
    let [id,setId] = useState(6)
    let [isValid,setIsValid] = useState(false)
    let location = useLocation()
    let {isAuth,email} = useAuth()
    const citiesRef = collection(db, "users");
    async function loadData(db){
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef); 
      if (docSnap.exists()) {
        setResults(docSnap.data().results)
        setLoading(false)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
   

      
    useEffect(() => {
      console.log(location)
      loadData(db)
    },[])

  return loading ? (
  <div className="loadwrap">
    <Oval height={180}
      width={180}
      color="blue"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="darkblue"
      strokeWidth={1}
      strokeWidthSecondary={1}/>
      </div>
    ) :(
    <div className='result'>
      
        <table>
        <tr>
            <th>Номер</th>
            <th>Тип теста</th>
            <th>Верных решений</th>
            <th>Оценка</th>
        </tr>
            
            {results.map(result => {
                return <tr key={result.id} style={result.mark == 2 ?{color:'red'} : result.mark == 3 ?{color:'orange'} : result.mark == 4 ?{color:'yellow'} : {color:'green'}}> 
                <td>{result.id}</td>
                <td>{result.testType}</td>
                <td>{result.total}</td>
                <td >{result.mark}</td>
                </tr>
            })}
           
        </table>
    </div>
  )
}
