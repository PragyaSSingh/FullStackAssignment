import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../css/login.css"

const Login = () => {
    const navigate= useNavigate();
    const [user,setUser] = useState({
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

    const login =async()=>{
      const data = await axios.post("/api/user/login",user);
     if(data.data.token){
        localStorage.setItem('recipe_token',data.data.token);
        navigate('/home');
     }else{
        navigate('/register');
     }
        
    }

  return (
    <div className="app">
    <div className="login-form">
    <div className="title">Log In</div>
    <div className="form">
    
        
     

        <div className="input-container">
            <label className="form__label" for="email">Email </label>
            <div className='input_block'>
            <input  type="email" id="email" className="form__input" placeholder="Email"
                name="email"
                value ={user.email}
                onChange={handleChange}
            /></div>
        </div>
        <div className="input-container">
            <label className="form__label" for="password">Password </label>
            <input className="form__input" type="password"  id="password" placeholder="Password"
                 name="password"
                value ={user.password}
                onChange={handleChange}
            />
        
        
    </div>
    <div className="button-container">
          <button onClick={login}>Login</button>
        </div>
        
    <div className='reg_button'>
    <p>New to Website?</p>
    <Link to="/register"><button>Register</button></Link></div>
</div> 
</div>
    </div>

  )
}



export default Login