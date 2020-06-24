const express = require('express');
const signRouter = express.Router();

signRouter.get('/',function(req,res){
    res.render("signUp",{
        nav,
        title: 'Library'
    });
});

module.exports = signRouter;