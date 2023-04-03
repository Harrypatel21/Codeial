const User = require('../models/user');



module.exports.profile = function(req, res){
  return res.render('user_profile', {
    title:"Profile",
    myName:"Hariom"
  })
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
      title: "Codial | sign In"
    });
}

module.exports.signUp = function(req, res){
  return res.render('user_sign_up', {
    title: "Codial | Sign Up"
  })
}

// get the sign up data
module.exports.create = async (req, res) => {
  try {
    if (req.body.password !== req.body.conformPass) {
      return res.redirect('back');
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const newUser = await User.create(req.body);
      return res.redirect('/users/sign-in');
    } else {
      return res.redirect('back');
    }
  } catch (error) {
    console.log('Error:', error);
    return res.redirect('back');
  }
};

    
// sign in and create session for users
module.exports.createSession = function(req, res){
  // todo later
}