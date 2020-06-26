const express = require('express');
const loginsRouter = express.Router();

function lrouter(nav){
    loginsRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            title: 'library'
        });
    });

    return loginsRouter;
}

module.exports = lrouter;