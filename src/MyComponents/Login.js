import React, { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Login() {
  const[email, setEmail]=useState();
  const[password, setPassword]=useState();
  const [flag, setFlag] = useState(false);
  const [formData,setForm] = useState({})

  function handleLogin(e){
    e.preventDefault();
    console.log(formData)
    if(!formData.email || !formData.password){
        setFlag(true);
    }else{ if (showMessage()) 
      {setFlag(false);
            let users = localStorage.setItem("users") 
            users  = users ? JSON.parse(users) : []
            console.log(users.find(u=>u.email !== formData.email),users.find(u=>u.email === formData.email))
            if(users.filter(u=>u.email === formData.email).length ===0){

                localStorage.getItem("users", JSON.stringify([...users, formData]));
            }
            console.log("logged in.");
            alert("login successfully")}
          
        }
};
function showMessage()
{
    if (password !== formData.Password || email !== formData.email) {
        alert("please type email and password that stored in local storage");return false;
    } else{
     return true;
}
}
const setField =(e)=>{
  console.log(e.target)
  setForm({ ...formData, [e.target.name]: e.target.value})
}

/*
  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password");
    let mail = localStorage.getItem("Email");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (password !== pass || emaillog !== mail) {
      setFlag(true);
    } else {

      setHome(!home);
      setFlag(false);
    
    }
  }
  */

  return (
    <div>
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

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
    </div>
  );
}
