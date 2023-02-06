import React from 'react'
import gp from '../image/greenpremium.jpg'
import initiative from '../image/initiative.jpg'

export default function Section2() {
  return (
    <>
    <div className="card-group1">
        <div className="card text-bg-dark"  style={{margin:"20px"}} >
        <img src={gp} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Carbon Footprint</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark"  style={{margin:"20px"}}>
        <img src={gp} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Impacts</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark"  style={{margin:"20px"}}>
        <img src={gp} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Green Premium</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
    </div>
    <div className="card-group2">
        <div className="card text-bg-dark"  style={{margin:"20px"}}>
        <img src={initiative} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Electric Vehicle</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark"  style={{margin:"20px"}}>
        <img src={initiative} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Heat aspects of EV</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
        <div className="card text-bg-dark"  style={{margin:"20px"}}>
        <img src={initiative} className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-decoration-underline text-black">Initiative</h3>
            <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            
        </div>        
        </div>
    </div>
    
    </>
  )
}
