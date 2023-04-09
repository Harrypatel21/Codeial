const User = require('../models/user');



module.exports.profile = async function(req, res){
  try {
    if (req.cookies.user_id) {
      console.log(req.cookie.user_id);
      const user = await User.findById(req.cookies.user_id);
    
      if (user) {
        return res.render('user_profile', {
          title: "User Profile",
          user: user
        })
      }
      return res.redirect('/users/sign-in');
    } else {
      return res.redirect('/users/sign-in');
    }
  } catch (err) {
    // Handle errors
    console.log('error', err);
  }
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
module.exports.createSession = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email});
    // console.log(req.body.email);
    // console.log(req.body.password);
    if (user) {
      if (user.password != req.body.password) {
        console.log(user.password);
        
        return res.redirect('/users/sign-up');
       
        
      }
      res.cookie('user_id', user.id);
      return res.redirect('/users/profile');
    } else {
      return res.redirect('/');
    }
  } catch (error) {
    console.log('Error:', error);
    return res.redirect('back');
  }
};

