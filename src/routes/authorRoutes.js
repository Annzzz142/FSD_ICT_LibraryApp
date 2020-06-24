const express = require('express');
const router = require('./bookRoutes');
const authorsRouter = express.Router();
function arouter(nav){
    var authors = [
        {
            author: 'Joseph Barbera',
            works: 'Tom and Jerry',
            img: "joseph barbera.jpg"
        },
        {
            author: 'J K Rawling',
            works: 'Harry Potter',
            img: "jk Rowling.jpg"
        },
        {
            author: 'Paulo Coelho',
            works: 'The Alchemist, Brida, The Seventh Mountain',
            img: "paulo coelho.jpg"
        }
    ]
    
    authorsRouter.get('/', function(req, res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    
    authorsRouter.get('/:i', function(req,res){
        const i = req.params.i;
        res.render('author',{
            nav,
            title: 'Library',
            author: authors[i]
        });
    }); 
    return authorsRouter;
}

module.exports = arouter;