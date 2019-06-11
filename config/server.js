const express  = require('express');
const consign = require('consign');

const app = express();

// configuração de segurança
// OBS: Modo de segurança e certificado SSl

//  app.disable('x-powered-by');
//  app.get('*', (req, res, next) => {
//      if (req.headers['x-forwarded-proto'] != 'https') {  
//  // checa se o header é HTTP ou HTTPS
//         res.redirect("https://" + req.headers.host + req.url);
// // faz o redirect para HTTPS
//     } else {
//         next();
//  // segue com a sequência das rotas
//      }
//  });

app.set('view engine', 'ejs');
app.set('views' , './app/views');

app.use(express.static('./app/public'));

consign()
    .include('app/routes')
    .into(app);

module.exports = app;