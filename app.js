const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expHandlebars = require('express-handlebars');
const db = require('./config/database');
const session = require('express-session');

const app = express();

// body-parser
app.use(bodyParser.urlencoded( { extended : false}));

// handlebars
app.engine('handlebars', expHandlebars( { defaultLayout : 'main' } ));
app.set('view engine', 'handlebars');


// home route
app.get('/', (req, res) => res.render('home'));

// login route
app.use('/login', require('./routes/login'));

// login route
app.use('/register', require('./routes/register'));

// login route
app.use('/search', require('./routes/search'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// test db 
db.authenticate()
    .then(()=>console.log('Mysql connected'))
    .catch(err=> console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`));