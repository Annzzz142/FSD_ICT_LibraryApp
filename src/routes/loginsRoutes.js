const express = require('express');
const loginRouter = express.Router();

loginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title: 'Library'
    });
});

module.exports = loginRouter;