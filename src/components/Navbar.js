import React from 'react'

function Navbar() {
  return (
            <nav className="navbar navbar-expand-lg bg-transparent text-dark position-absolute top-0 fs-5" >
            <div className="container-fluid border-3 border-bottom border-dark" style={{paddingBottom: "15px" , paddingLeft: "0px" , paddingRight: "0px" , margin: "0px 13px"}}>
            <a className="navbar-brand fs-3" href="/">IITR | ChemE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{width:"1066px"}}>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    C-Emission Calculator
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">HouseHold</a></li>
                    <li><a className="dropdown-item" href="/">Vehicle</a></li>
                    <li><a className="dropdown-item" href="/">Industrial</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">News & Events</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default Navbar
