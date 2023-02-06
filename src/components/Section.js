import React from 'react'
import logo1 from '../image/logo3.jpg';
import Navbar from './Navbar';

function Section() {
  return (
    <>
       <div className="position-relative">
        <Navbar/>
       <img src={logo1} className="img-fluid " alt="Responsive"></img>
       <h1 className="position-absolute top-50 fw-bold" style={{marginLeft:"35px"}}>Case study</h1>
       </div>
    </>
  )
}

export default Section
