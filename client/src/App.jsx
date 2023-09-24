import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './assets/signup'
import Login from './assets/login'
import Homepage from './assets/homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Homepage/>}></Route>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
