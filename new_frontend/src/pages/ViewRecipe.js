import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../css/home.css";

const ViewRecipe = () => {
    const urlparams = useParams();
    const [recipe,setRecipe] = useState({});
    const [user,setUser] = useState({});
    const localtoken = localStorage.getItem('recipe_token');
    const getRecipe = async()=>{
    
      const config = {
        headers: {
          Authorization: `Bearer ${localtoken}`,
        },
      };
        const data = await axios.get(`/api/recipe/${urlparams.id}`);
       console.log(data.data);
       setRecipe(data.data);
       console.log(recipe);
      
        const user = await axios.get('/api/user',config);
        console.log(user.data);
        setUser(user.data);
    }
    

    useEffect(()=>{
        getRecipe();
        
    },[]);
  return (
    <>
    <div className='recipe-page'>
       <div className='recipe'>
           <h1 className='recipe-heading'>{recipe.title}</h1>
           <h4 style={{color:"white"}}>Description</h4>
          <p className='recipe-desc'>{recipe.description}</p>
          <h4 style={{color:"black"}}>Ingredients</h4>
        <p className='recipe-desc'>{recipe.ingredients}</p>
       
       </div>
        
    {
        user._id === recipe.createdBy && <Link className='btn' to={`/edit/${recipe._id}`}>Edit Recipe</Link>
    }
    
       
    </div>
    </>


  )
}

export default ViewRecipe