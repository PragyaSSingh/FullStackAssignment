import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import "../css/login.css"

const Register = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }
    const egister = async()=>{
        
        const {name,email,password} = user
        if (name && email && password){
         const data =await axios.post("/api/user/register",user );
         console.log(data);
         if(data){
           navigate('/login');
         }
        }
        else{
            alert("invalid input")
        };
        }
 

 
  return (

     <div className="app">
    <div className="login-form">
    <div className="title">Register</div>
    <div className="form">
      
              <div className="input-container">
                  <label className="form__label" for="firstName"> Name </label>
                  <input className="form__input" type="text" id="firstName"
                  name="name"
                   placeholder="Full Name"
                   value={user.name}
                   onChange={handleChange}
                  />
              </div>
    
              <div className="input-container">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"
                  name="email"
                     value={user.email}
                   onChange={handleChange}
                  />
              </div>
              <div className="input-container">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"
                   name="password"
                   value={user.password}
                   onChange={handleChange}
                  />
              </div>
              <div className="button-container">
          <button onClick={egister}>Register</button>
        </div>
        
        <div className='reg_button'>
    <p>Already Registered?</p>
    <Link to="/login"><button>Login</button></Link></div>
</div> 
</div>
    </div>
  )
  }

export default Register