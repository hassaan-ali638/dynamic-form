import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';


export default function Registeration() {
    const [formData,setForm] = useState({})
    const [flag, setFlag] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.phone ){
            setFlag(true);
        }else{
            if( showMessage())
            {setFlag(false);
                let users = localStorage.getItem("users") 
                users  = users ? JSON.parse(users) : []
                console.log(users.find(u=>u.email !== formData.email),users.find(u=>u.email === formData.email))
                if(users.filter(u=>u.email === formData.email).length ===0){

                    localStorage.setItem("users", JSON.stringify([...users, formData]));
                }
                console.log("saved in local storage");
                alert("open local storage from inspect to see what user inputs")}
                
            }
    };

    function showMessage()
    {
        if (formData.password !== formData.confirmPassword) {
            alert("please type same password in both Password and Confirm Password feilds");return false;
        } else{
         return true;
    }

    }
    const setField =(e)=>{
        console.log(e.target)
        setForm({ ...formData, [e.target.name]: e.target.value})
    }
  return (
      <div>
    <form onSubmit={handleSubmit}>
        <h3>Registeration</h3>
        <div className='form-group' >
            <label>Name   </label> {""}
            <input 
            type = 'text'
            name='name'
            classname = 'form-control'
            placeholder = 'Enter Full Name'
            onChange={(e)=> setField(e)}
            />
        </div> <br></br>

        <div className='form-group'>
            <label>Email   </label> {""}
            <input 
            type = 'text'
            name='email'
            classname = 'form-control'
            placeholder = 'Enter Email'
            onChange={(e)=> setField(e)}
            />
        </div><br></br>

        <div className='form-group'>
            <label>Password   </label> {""}
            <input 
            type = 'Password'
            classname = 'form-control'
            name='password'
            onChange={(e)=> setField(e)}
            placeholder = 'Enter Password'
            />
        </div><br></br>

        <div className='form-group'>
            <label>Confirm Password  </label> {""}
            <input 
            type = 'Password'
            classname = 'form-control'
            name='confirmPassword'
            onChange={(e)=> setField(e)}
            placeholder = 'Enter Password Again'
            />
        </div><br></br>

        <div className='form-group'> 
            <label>Phone   </label> {""}
            <input 
            type = 'phone'
            classname = 'form-control'
            name='phone'
            placeholder = 'Enter Phone'
           onChange={(e)=> setField(e)}
            />
        </div><br></br>

        <button type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>
        <br></br>
        {
            flag && (
                <Alert color='primary' variant='danger'>Please fill every feild</Alert>
            )
        }

    </form>
    </div>
        )
}
