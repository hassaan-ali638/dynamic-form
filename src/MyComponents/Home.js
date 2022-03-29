import React from 'react'


function Home() {

 function logOut(){
  let users = localStorage.getItem("users") 
  users  = users ? JSON.parse(users) : []
  
  localStorage.removeItem("users");
  alert("user Logout successfully");
}
  return (
    <div><h1>Login succesfully</h1>
    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={logOut}>LogOut</button>
    </div>
  )
}

export default Home