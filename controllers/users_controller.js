module.exports.profile = function(req, res){
   return  res.end('<h1>Users Profile</h1>');
}

module.exports.login = function(req, res){
    return res.end('<h1> Users Login</h>');
}