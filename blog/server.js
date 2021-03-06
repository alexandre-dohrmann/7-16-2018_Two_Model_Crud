const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('./db/db');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extend: false}));

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);

app.get('/', (req, res) => {
	res.render('index.ejs');
});





app.listen(3000, () => {
	console.log('App is listening on port 3000');
});