import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom'

import "../css/home.css"

const Home = () => {
  const navigate = useNavigate();
  const[search,setSearch] = useState("");
  const [recipes,setRecipes] = useState([]);
  const getRecipes = async()=>{
    const data = await axios.get('/api/recipe/');
  
   setRecipes(data.data);
    
  }
  const logout = async()=>{
    localStorage.removeItem("recipe_token");
    navigate('/');
  }
  useEffect(()=>{
    getRecipes()
    console.log(search);
  },[]);

  {/*useEffect(()=>{
    setRecipes(recipes.filter((rec)=>
    rec.title.toLowerCase().includes(search.toLowerCase())));
  },setSearch)*/}

  const searchFunction=()=>{
    setRecipes(recipes.filter((rec)=>
    rec.title.toLowerCase().includes(search.toLowerCase())));
  }
   
  return (
    <>
    <div className='home_container'>
  {/*<input type="text" placeholder='Enter Recipe'
  name="search" value={search}
  onChange={(e)=>setSearch(e.target.value)}></input>
  <button onClick={searchFunction}>Search</button>*/}
    <div class="card_container">
    
   
    {
      recipes.map((element) =>{
        return (
          <Card style={{ margin: 10 }} className="card_cont">
                <Card.Body style={{ display: "flex" }} className="sec_cont">
                  <h2  className='title'
                  >
                      {element.title}
                    
                  </h2>

                 
                
          <Link to={`/view/recipe/${element._id}`}> <button className='view_btn'>Click to view whole recipe</button></Link>
                      
                  </Card.Body>
                
              </Card>
        )}

      )
    }
    </div>

    <div className='other_cont'>
     <Link className='btn' to='/add'>Add New Recipe</Link>
     <button className='btn' onClick={logout}>Log out</button>
     </div>

     </div>
     
    </>

  
  
  )}

export default Home