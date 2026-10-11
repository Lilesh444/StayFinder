const User=require('../models/user')
const passport = require('passport')


module.exports.signUp=async(req,res)=>{
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
}
module.exports.logIn=async(req,res)=>{
        req.flash('success','Welcome Back !!, Logged in Successfully!!')
        // return res.redirect('/listing')
        let redirectUrl=res.locals.redirectUrl || '/listing'
        return res.redirect(redirectUrl)
}

module.exports.logOut=(req,res,next)=>{
    req.logout(err=>{
        if(err){
            next(err)
        }
        req.flash('success','logged out successfully!!')
        res.redirect('/listing')
    })
}