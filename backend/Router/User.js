const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
const { protect } = require("../Middlewares/auth");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log("received");
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
    
  } catch (err) {
    
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;

    const token = generateToken(others._id);
    
    res.status(200).json({others,token});
  } catch (err) {
    res.status(500).json(err);
    
  }
});

router.get('/',protect,async(req,res)=>{
  try{
  const user = req.user;
  res.status(200).json(user);
}catch(err){
  res.status(500).json(err);
  }
})


module.exports = router;