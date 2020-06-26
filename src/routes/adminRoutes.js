const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/bookData');

function adrouter(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook',
        {
            nav,
            title: 'Library'
        });
    });   

    adminRouter.post('/add',function(req,res){
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }

        var book = Bookdata(item);
        book.save(); //saving to db
        res.redirect('/books');
    });

    adminRouter.post('/',function(req,res){
        var sign = {
            username: req.body.username,
            password: req.body.password
        }

        
    });

    return adminRouter;
}

module.exports = adrouter;
