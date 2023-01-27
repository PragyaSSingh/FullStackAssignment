const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title:{
        type:String,
    },
    ingredients:{
        type:String
    },
    description:{
        type:String,
    },
   
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;