module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error','plz login to add a listing')
        return res.redirect('/users/login')
    }
    next()
}