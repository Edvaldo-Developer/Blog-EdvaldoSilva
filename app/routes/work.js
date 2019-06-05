module.exports = function(app){

    app.get('/trabalho', function(req, res){

        res.render("work/trabalho");
    });
};