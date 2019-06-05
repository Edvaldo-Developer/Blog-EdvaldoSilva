module.exports = function(app){
    app.get('/artigo', function(req, res){
        res.render("article/artigo");
    })
}