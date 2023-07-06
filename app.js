// EXPRESS.JS setup //
const express = require("express");
const app = express();
const port = 5000;

// Static Files //
app.use(express.static('public'));
app.use('/css', express.static(__dirname + './public/css'));
app.use('/js', express.static(__dirname + './public/js'));
app.use('/assets', express.static(__dirname + './public/assets'));

// Set Templating Engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views');

app.get("/", (req, res) =>{
	res.render('index');
});

app.get("*", (req, res) =>{
	res.render('error404');
});

// Listener // 
app.listen(port, () => {
	console.log(`Application Listening On Port ${port}:`);
});