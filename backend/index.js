const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./Router/User');
const recipeRouter = require('./Router/Recipe');
const cors = require('cors');
const connectDB = require('./config/db');
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/recipe',recipeRouter);

app.listen("5000",()=>{
    console.log("Server Running");
});