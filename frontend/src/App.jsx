import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinments from './pages/MyAppoinments'
import Appoinment from './pages/Appoinment'
import Navbar from './componnts/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/doctors' element={ <Doctors/> } />
            <Route path='/doctors/:speciality' element={ <Home /> } />
            <Route path='/login' element={ <Login/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/contact' element={ <Contact/> } />
            <Route path='/myProfile' element={ <MyProfile/> } />
            <Route path='/myAppoinments' element={ <MyAppoinments/> } />
            <Route path='/appoinment/:docId' element={ <Appoinment/> } />
        </Routes>
    </div>
  )
}

export default App