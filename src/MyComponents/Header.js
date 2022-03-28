import React from 'react'
import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Registeration from './Registration';

export default function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <button ><Link to="/registration" style={{ textDecoration: 'none', color:'black', padding:'50px'  }}>  Registration</Link></button>
          <button ><Link to="/login" style={{ textDecoration: 'none',color:'black', padding:'50px' }}>Login</Link></button> 
        </div>
      </div>           
    </nav>

    <Routes>
              <Route path="/registration" element={<Registeration />} />
              <Route path="/login" element={<Login />} />
    </Routes>
     </>
  );
}