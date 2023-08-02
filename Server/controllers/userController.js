



const userController = {}

const User = require('../models/userModel.js');

userController.addUser = (req,res,next) => {
    console.log("reached the add review controller")
    const {username, password} = req.body
    if(username !=  '' && password != '') {
        // res.status(302)
        User.create({username, password}).then(() => {
            next()
        })
      }
      else next("Error in the user add controller")
}

module.exports = userController