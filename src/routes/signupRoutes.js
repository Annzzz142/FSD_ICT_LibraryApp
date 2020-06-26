const express = require('express');
const signupsRouter = express.Router();

function srouter(nav){
    signupsRouter.get('/',function(req,res)
    {
        res.render("signup",
        {
            nav,
            title: 'library'
        });
    });

    return signupsRouter;
}

module.exports = srouter;