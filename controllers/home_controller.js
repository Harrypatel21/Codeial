module.exports.home = function(req, res){
     return res.render('home', {
        title: "Home"
     });
}

module.exports.about = function(req, res){
    return res.end('<h1>Users About</h1>');
}