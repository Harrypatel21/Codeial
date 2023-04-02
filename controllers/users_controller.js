module.exports.profile = function(req, res){
  return res.render('user_profile', {
    title:"Profile",
    myName:"Hariom"
  })
}

module.exports.login = function(req, res){
    return res.end('<h1> Users Login</h>');
}