import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipe = () => {
    const urlparams = useParams();
    const navigate = useNavigate();
    const [rec,setRec] = useState({});
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [ingredients,setIngredients] = useState();
   
    const getRecipe = async()=>{
        const reci = await axios.get(`/api/recipe/${urlparams.id}`);
        console.log(reci.data.title);
        setTitle(reci.data.title);
        setDescription(reci.data.description);
        setIngredients(reci.data.ingredients);
        
    }
  
    
    const editRecipe = async()=>{
        const localtoken = localStorage.getItem("recipe_token");
      const config = {
        headers: {
          Authorization: `Bearer ${localtoken}`,
        },
      };
        const data = await axios.put(`/api/recipe/edit/${urlparams.id}`,
        {title,description,ingredients},config);
        if(data.data){
            navigate(`/view/recipe/${urlparams.id}`)
        }
    }

    useEffect(()=>{
        getRecipe();
    },[]);
  return (
    <div className="app">
    <div className="login-form">
    <div className="title">Edit your recipe</div>
    <div className="form">
    
        <div className="input-container">
            <label className="form__label" for="title"> Title </label>
            <input className="form__input" type="text" id="title" placeholder="enter title"
            name="title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />
        </div>
        <br></br>
        <div className="input-container">
            <label className="form__label" for="desc">Description</label>
           <textarea className="form__input" name="description" 
           rows="8"
           cols="100"
           value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        </div>
        <br></br>
        <div className="input-container">
            <label className="form__label" for="desc">Ingredients</label>
           <textarea className="form__input" value={ingredients}
            rows="8"
           cols="100" 
           name="ingredients" onChange={(e)=> setIngredients(e.target.value)}></textarea>
        </div>
        <br></br>
        
    </div>
    <div class="footer">
        <button type="submit" class="btn" onClick={editRecipe} >Edit</button>
    </div>
</div> 
</div>
  
  )
}

export default EditRecipe