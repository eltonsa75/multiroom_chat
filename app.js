/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listfen(80, function(){
    console.log('Servidor online');
})