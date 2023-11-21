import React from 'react'
import "./home.css"
import { Link,  useNavigate } from "react-router-dom";
const Home = () => {
  return (
    <div className='container'>
      
      <Link to={"/DoctorDetail"}><button>Doctor Details</button></Link>
      <Link to={"/ViewDoctorDetails"}><button>View Doctor Details</button></Link>
      <Link to={"/MedicalService"}><button>Medical Services</button></Link>
      <Link to={"/ViewMedicalService"}><button>View Medical Services</button></Link>
    </div>
  )
}

export default Home