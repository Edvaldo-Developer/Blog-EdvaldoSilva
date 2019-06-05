const app = require('./config/server');

// var rotaHome = require('./app/routes/home')(app);


app.listen(3000, function(){
    console.log('Servidor ON');
});

