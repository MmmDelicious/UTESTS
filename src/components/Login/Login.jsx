import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from '../Form/Form'
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    
    const dispatch = useDispatch()
    const history = useNavigate()
  

    const handleLogin = (email,password) => {
      const auth = getAuth();
      console.log(auth)
      signInWithEmailAndPassword(auth,email,password)
      .then(({user}) => {
          console.log(user)
          dispatch(setUser({
              email:user.email,
              id:user.uid,
              token:user.accessToken
          }))
          history('/')
      })
   
     
  }
  return (
    <Form title={"Войти"} handleClick={handleLogin}/>
  )
}
