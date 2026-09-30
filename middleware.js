module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.user) // this line will a val if loged in else undefined and will b used
                          // for showing signup/login/logout
    if(!req.isAuthenticated()){
        req.flash('error','plz login to add a listing')
        return res.redirect('/users/login')
    }
    next()
}