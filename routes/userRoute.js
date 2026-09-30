const express=require('express')
const router=express.Router()
const User=require('../models/user')
const passport = require('passport')

router.get('/signup',(req,res)=>{
    res.render('users/signup.ejs') 
})

router.post('/signup',async(req,res)=>{
   try {
     let {username,email,password}=req.body
    let newUser=new User({username,email})
    let registeredUser=await User.register(newUser,password)
    // console.log(registeredUser)
    req.login(registeredUser,(err)=>{
        if(err){
            return next(error)
        }
        req.flash('success',"New User Registered")
        return res.redirect('/listing')
    })
    // req.flash('success',"New User Registered")
    // return res.redirect('/listing')
   } catch (error) {
    req.flash('error',error.message)
    return res.redirect('/users/signup');
   }
})

router.get('/login',(req,res)=>{
    res.render('users/login.ejs') 
})

router.post('/login',
    passport.authenticate('local',
    {failureRedirect:'/users/login',
    failureFlash:true}),
    async(req,res)=>{
        req.flash('success','Welcome Back !!, Logged in Successfully!!')
        return res.redirect('/listing')
})

router.get('/logout',(req,res,next)=>{
    req.logout(err=>{
        if(err){
            next(err)
        }
        req.flash('success','logged out successfully!!')
        res.redirect('/listing')
    })
})

module.exports=router;