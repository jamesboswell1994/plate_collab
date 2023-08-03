



const userController = {}

const { EvalSourceMapDevToolPlugin } = require('webpack');
const User = require('../models/userModel.js');

userController.addUser = (req,res,next) => {
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

userController.getUsers = (req, res, next)=> {
    User.find().then((data) => {
        console.log("The data is " + data)
        res.locals.users = data
        next()
    }).catch((err) => {console.log(err)})
}
module.exports = userController