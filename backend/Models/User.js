const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
    recipes:[
        {
            recipe:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Recipe",
            }
        }
    ]
});

const User = mongoose.model("User", userSchema);
module.exports = User;