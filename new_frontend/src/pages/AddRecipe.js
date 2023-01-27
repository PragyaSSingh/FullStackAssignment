import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddRecipe = () => {
  const navigate = useNavigate();
    const [recipe,setRecipe] = useState({
        title:"",
        description: "",
        ingredients:""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setRecipe({
    ...recipe,//spread operator 
    [name]:value
    })
    }
    const addRecipe =async()=>{
      const localtoken = localStorage.getItem("recipe_token");
      const config = {
        headers: {
          Authorization: `Bearer ${localtoken}`,
        },
      };
      const data = await axios.post("/api/recipe/create",recipe,config);
      if(data.data.recipe){
        navigate('/home');
      }
        
    }
  return (
    <div className="app">
    <div className="login-form">
    <div className="title">Add Your Recipe</div>
    <div className="form">
        <div className="input-container">
            <label className="form__label" for="title"> Title </label>
            <input className="form__input" type="text" id="title" placeholder="Enter title"
               name="title"
                value ={recipe.title}
                onChange={handleChange}
            />
        </div>

        <div className="input-container">
            <label className="form__label" for="desc">Description</label>
           <textarea className="form__input"
                      rows="8"
           cols="100"
            name="description"
            placeholder="Enter description"
                value ={recipe.description}
                onChange={handleChange}></textarea>
        </div>
        <div className="input-container">
            <label className="form__label" for="desc">Ingredients</label>
           <textarea className="form__input"
                      rows="8"
           cols="100"
           placeholder="Enter ingredients"
            name="ingredients"
                value ={recipe.ingredients}
                onChange={handleChange}></textarea>
        </div>
        
    </div>
    <div class="footer">
        <button type="submit" class="btn" onClick={addRecipe}>Add</button>
    </div>
    </div>
    </div>
  )
}

export default AddRecipe