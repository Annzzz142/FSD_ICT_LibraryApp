//it's our server

const express = require('express');
const app = express();


const nav = [
    {link:'/books', name:'Books'},
    {link:'/authors', name:'Authors'},
    {link:'/login', name:'Login'},
    {link:'/admin', name:'Add Books'},
    {link:'/signup', name:'SignUp'}
];


const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginsRouter = require('./src/routes/loginRoutes')(nav);
const signupsRouter = require('./src/routes/signupRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);

// teach the server to use the respective routers according to the navigation
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginsRouter);
app.use('/signup', signupsRouter);
app.use('/admin', adminRouter);


//tell the router to redirect to the index page whenever it gets a '/'
app.get('/',function(req, res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(5000);