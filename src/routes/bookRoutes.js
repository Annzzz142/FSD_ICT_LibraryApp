const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: "tom n jerry.jpg"
        },
        {
            title: 'Harry potter',
            author: 'JK Rowling',
            genre: 'Fantasy',
            img: "harry potter.jpg"
        },
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Novel',
            img: "the alchemist.jpg"
        }
    ]
    
    booksRouter.get('/', function(req, res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });
    
    booksRouter.get('/:i', function(req, res){
        const i = req.params.i;
        res.render('book',{
            nav,
            title:'Library',
            book: books[i]
        });
    });

    return booksRouter;
}

module.exports =router;