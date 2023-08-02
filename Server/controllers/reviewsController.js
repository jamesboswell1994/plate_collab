

const dishReviewController = {}


const DishModels = require('../models/dishReviewModels.js')
const User = require('../models/userModel.js');

dishReviewController.addReview = (req,res,next) => {
    console.log("reached the add review controller")
    const {restaurant, grade, dishName, category, notes, username} = req.body
    if(restaurant !=  '' && grade != '' && dishName != '' && category != '' && notes != '' ) {
        // res.status(302)
        DishModels.DishReview.create({dishName , restaurant, grade, notes, category, username}).then(() => {next()}).catch((err) => {console.log("error")})
      }
      else console.log("the if statement in the addReview in reviewsController failed")
      next()
}

dishReviewController.getReviews = (req,res,next) => {

    const username = req.query.username
    console.log(username + " is the username in the server get reviews thing")

    try {
    DishModels.DishReview.find({username : username}).then((data) =>{

        res.locals.reviewsData = data
        console.log(res.locals.reviewsData)
        next()
    })
    }
    catch (err) {
        console.log("disaster in the getReviews function " + err)
        next(err)
    }
}
module.exports = dishReviewController