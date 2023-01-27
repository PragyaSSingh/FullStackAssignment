const router = require("express").Router();
const User = require("../Models/User");
const Recipe = require("../Models/Recipe");
const protect  = require("../Middlewares/auth").protect;


//Add Recipe
router.post("/create", protect , async (req, res) => {
  try {
   const user = await User.findById(req.user.id);
    const newRecipe = new Recipe({
      createdBy:req.user.id,
      title:req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
    });

    const recipe = await newRecipe.save();
    user.recipes.push(recipe);
    await user.save();
    res.status(200).json({recipe,user});
    
  } catch (err) {
    
    res.status(500).json(err);
  }
});

//Edit Recipe
router.put("/edit/:id",protect, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    console.log("jnedkv");

    const updatedPost = await Recipe.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
            new:true,
        }
      );
      res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
    
  }
});

//get recipe by id
router.get("/:id", async(req,res)=>{
    try{
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json(recipe);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get All Recipes
router.get("/", async(req,res)=>{
    try{
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    }catch(err){
        res.status(500).json(err.message);
    }
})

//Get User's Recipes

router.get("/all",protect,async(req,res)=>{
    try{
        const recipes = await User.findById(req.user._id);
        res.status(200).json(recipes);
           
    }catch(err){
        res.status(500).json(err);
    }
})

//Delete Recipe


module.exports = router;