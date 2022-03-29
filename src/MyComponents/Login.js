import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "./Home";

export default function Login() {
  const [formData,setForm] = useState({})
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e){
    e.preventDefault();
    console.log(formData)
    if(!formData.email || !formData.password){
        setFlag(true);
    }else{{
      setFlag(false);
            let users = localStorage.getItem("users") 
            users  = users ? JSON.parse(users) : []
            if(users.filter(u=>u.email === formData.email).length >0  && users.filter(u=>u.password === formData.password).length >0){
            console.log("email and password matched");
            alert("Login successfully!")
            setHome(!home);
            setFlag(false);
          }
          
            else{
              alert("Invalid Email and Password.")
            }
            }      
        }
};
const setField =(e)=>{
    console.log(e.target)
    setForm({ ...formData, [e.target.name]: e.target.value})
}
  return (

    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=> setField(e)}
              
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e)=> setField(e)}
              
            />
          </div>
          <div>
          <button  type="submit" className="btn btn-dark btn-lg btn-block">
         
          Login</button> 
          </div>
          
          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.a
            </Alert>
          )}
        </form>
        ) : (
          <Home />
          )}
    </div>
  );
}

