//it's our server

const express = require('express');

const app = express();

const nav = [
    {
        link:'/books', name:'Books'
    },
    {
        link:'/authors', name:'Authors'
    },
    {
        link:'/login', name:'Login'
    },
    {
        link:'/signup', name:'SignUp'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginsRoutes')(nav);
const signRouter = require('./src/routes/signupsRouter')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signup', signRouter);


//tell the router to redirect to the index page whenever it gets a '/'
app.get('/',function(req, res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);