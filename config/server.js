/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bosyParser = require('bosy-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express */
var app = express();

/* setar as varaiveis 'view engine' e 'views' do express */
app.set('views engine', 'ejs');
app.set('views', './app/views');


/* configurar p middleware express.static */
app.use(express.static('./app/public'));

/* confiurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* confiurar o middleware express-validator*/
app.use(expressValidator());

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
.include('app/routes')
.then('app/modelsl')
.then('app/controllers')
.into(app);


/* exportar o objeto app */
module.exports = app;
