const express = require('express')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const session = require('express-session');
const app = express()

app.use('/',       express.static('root'))
app.use('/static', express.static('static'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({'secret': 'Ohhh... this is a secret msg gregory;;'}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', function (req, res) {
	res.render('index.html');
})

app.get('/docs', function(req, res) {
	res.render('docs/index.html')
})

app.get('/docs/controller', function(req, res) {
	res.render('docs/xml.html');
})

app.get('/docs/python-api', function(req, res) {
	res.render('docs/python.html');
})

app.get('/getting-started', function(req, res) {
	res.render('start.html');
})

app.get('/first-app', function(req, res) {
	res.render('start.html');
})

app.listen(process.env.PORT || 8001, function () {
	console.log('Jiro developers app is running!')
})