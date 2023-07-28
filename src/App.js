import './App.css';
import {NavBar} from'./components/NavBar/NavBar'
import {Router,Route,Routes} from 'react-router-dom'

import { TestPage } from './components/TestPage/TestPage';
import { Layout } from './components/Layout/Layout';
import { useState } from 'react';
import { PretestPage } from './components/PretestPage/PretestPage';
import { Table } from './components/Table/Table';
import { ResultPage } from './components/ResultPage/ResultPage';
import { MainPage } from './components/MainPage/MainPage';
import { TaskPage } from './components/TaskPage/TaskPage';
import { AfterTestPage } from './components/AfterTestPage/AfterTestPage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { RegisterPage } from './components/RegisterPage/RegisterPage';



function App() {




  return (
    <div className="App">
      <Routes > 
      <Route path='/' element={<Layout/>}>  
        <Route index path='/' element={<MainPage/>}></Route>  
        <Route path='/Table' element={<Table/>}></Route>   
        <Route path='/Test' element={<TestPage/>}></Route>  
        <Route path='/login' element={<LoginPage/>}></Route>  
        <Route path='/register' element={<RegisterPage/>}></Route>  
        <Route path='/Result' element={<ResultPage/>}></Route>  
        <Route path='/Test/:category' element={<PretestPage/>}></Route> 
        <Route path='/Test/:category/:number' element={<TaskPage/>}></Route> 
        <Route path='/Test/AfterTest' element={<AfterTestPage/>}></Route> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
