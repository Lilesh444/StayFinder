module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.user) // this line will a val if loged in else undefined and will b used
                          // for showing signup/login/logout
    if(!req.isAuthenticated()){
        // post login page means kis route jana tha usi pe vejo after login
        req.session.redirectURL=req.originalUrl
        req.flash('error','plz login to add a listing')
        return res.redirect('/users/login')
    }
    next()
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectURL){
        res.locals.redirectUrl=req.session.redirectURL
    }
    next()
}