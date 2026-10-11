const express=require('express')
const router=express.Router()
// const User=require('../models/user')
const passport = require('passport')
const { saveRedirectUrl } = require('../middleware')
const userController=require('../controllers/userController')

router.get('/signup',(req,res)=>{
    res.render('users/signup.ejs') 
})

router.post('/signup',userController.signUp)

router.get('/login',(req,res)=>{
    res.render('users/login.ejs') 
})

router.post('/login',
    saveRedirectUrl,
    passport.authenticate('local',
    {failureRedirect:'/users/login',
    failureFlash:true}),userController.logIn)

router.get('/logout',userController.logOut)

module.exports=router;