



const userController = {}

const { EvalSourceMapDevToolPlugin } = require('webpack');
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

userController.validateUser = (req, res, next) => {
    const {username, password} = req.body
    if(username !=  '' && password != '') {
        // res.status(302)
        User.find({username, password}).then((data) => {
            if (data != false){
                console.log("data in the username verifier " + data)
                res.locals.validated = true
            }
            else {
                res.locals.validated = false
            }
            next()
        }).catch((err) => next(err))
      }
      else next("Missing PW or username")

}
module.exports = userController