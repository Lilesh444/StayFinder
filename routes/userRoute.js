const express=require('express')
const router=express.Router()
const User=require('../models/user')

router.get('/signup',(req,res)=>{
    res.render('users/signup.ejs') 
})

router.post('/signup',async(req,res)=>{
   try {
     let {username,email,password}=req.body
    let newUser=new User({username,email})
    let registeredUser=await User.register(newUser,password)
    console.log(registeredUser)
    req.flash('success',"New User Registered")
    return res.redirect('/listing')
   } catch (error) {
    req.flash('error',error.message)
    return res.redirect('/users/signup');
   }
})
module.exports=router;