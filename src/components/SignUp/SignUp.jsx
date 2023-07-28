import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import {useHistory, useNavigate} from 'react-router-dom'
import { getFirestore, collection, getDocs,doc, setDoc, updateDoc,getDoc } from 'firebase/firestore/lite';
import {db} from '../../firebase.js'
import { Oval } from 'react-loader-spinner';
import './SignUp.css'
export const SignUp = () => {


    const dispatch = useDispatch()
    const history = useNavigate()
    let [isError,setIsError] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const handleRegister = async (email,password) => {
      setIsLoading(true)
      const citiesRef = collection(db, "users");
    
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth,email,password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email:user.email,
                id:user.uid,
                token:user.accessToken
            }))
            
           
        })
        if(!isError){
        await setDoc(doc(citiesRef, email), {
          email: email,
          id: Date.now(),
          results: [] }).then(setIsLoading(false));
        }
        history('/')
   
    }

  return isLoading ? (  <div className="loadwrap">
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
    </div>) :(
    
      
     
    <Form title={"Создать"} handleClick={handleRegister}/>
    
  )
}
