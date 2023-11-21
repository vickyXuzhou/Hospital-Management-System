import { useState } from 'react'
import SignUp from './pages/Signup/SignUp'
import Loginn from './pages/login/Loginn'
import DDetail from "./pages/Doctor/DDetail/DDetail.jsx"
import ViewDocDetails from "./pages/Doctor/ViewDocDetails/ViewDocDetails.jsx"
import MedicalService from "./pages/MedicalServices/MerdicalService/MedicalService.jsx"
import ViewMedicalService from "./pages/MedicalServices/viewMedicalService/ViewMedicalService.jsx"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/home';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Loginn/>}/>
        <Route path='/DoctorDetail' element={<DDetail/>}/>
        <Route path='/ViewDoctorDetails' element={<ViewDocDetails/>}/>
        <Route path='/MedicalService' element={<MedicalService/>}/>
        <Route path='/ViewMedicalService' element={<ViewMedicalService/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
