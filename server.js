express = require('express');
app = express();
bodyParser = require("body-parser");
session = require("express-session");
pg = require('pg');



app.set('views','./views');
app.set('view engine','pug');

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(require('./middleware/flash'))

// Routes
app.get('/' ,(request,response) => {
	console.log(response.locals)
	response.render('index',{title:"kaka",message:"kaka2"});
});

app.post('/',(request,response,next) =>{
	if (request.body.login === undefined || request.body.login === '') {
		request.flash("error","il y a une erreur");
		response.redirect('/');
	} else {
		connect = require('./lib/dbconnect')
		connect.query('SELECT NOW()', (err, res) => {
	  		console.log(res.rows)
			response.redirect('/');
	  	})
	}
})

app.listen(8080);
