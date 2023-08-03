

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
      else console.log("the if statement in the addReview in reviewsController failed" + restaurant + grade+dishName+category+notes+username)
      next()
}

dishReviewController.addToWishlist = (req,res,next) => {
    console.log("reached the add to wishlist control")
    console.log(req.body + " search here")
    const {wishRestaurant, wishDishName, howbad, username} = req.body
    const restaurant = wishRestaurant
    const dishname = wishDishName
    if(restaurant !='' && dishname != '' && howbad != '' && username != '' ) {
        // res.status(302)
        DishModels.Wishlist.create({restaurant , dishname, howbad, username}).then(() => {next()}).catch((err) => {console.log("error")})
      }
      else console.log("the if statement in the add wishlist in reviewsController failed" + restaurant +dishname+howbad+username)
      next()
}

dishReviewController.getReviews = (req,res,next) => {

    const username = req.query.username
    console.log(username + " is the username in the server get reviews thing")

    try {
    DishModels.DishReview.find({username : username}).then((data) =>{

        res.locals.reviewsData = data
        next()
    })
    }
    catch (err) {
        console.log("disaster in the getReviews function " + err)
        next(err)
    }
}

dishReviewController.getWishlist = (req,res,next) => {

    const username = req.query.username
    console.log(username + " is the username in the wishlist get reviews thing")

    try {
    DishModels.Wishlist.find({username : username}).then((data) =>{

        res.locals.wishlistData = data
        console.log(res.locals.wishlistData)
        next()
    })
    }
    catch (err) {
        console.log("disaster in the getwishlist function " + err)
        next(err)
    }
}


dishReviewController.deleteReview = (req, res, next) => {
    const {restaurant, dishName, notes} = req.body
    console.log(restaurant, ' ', dishName, ' ', notes)
    try{
        console.log("reached the delete")

        DishModels.DishReview.deleteOne({restaurant: restaurant, dishName : dishName , notes : notes}).then((data) =>{
            console.log(data[0] + "is the data we think we deleted")
            next()
        })
        
    }
    catch (err){
        console.log("error in the delete")
        next(err)
    }
}

dishReviewController.deleteWishlist = (req, res, next) => {
    const {restaurant, dishName, username} = req.body
    console.log(restaurant, ' ', dishName, ' ', username)
    try{
        console.log("reached the delete wishlist")

        DishModels.Wishlist.deleteOne({restaurant: restaurant, dishName : dishName , username : username}).then((data) =>{
            console.log(data[0] + "is the data we think we deleted")
            next()
        })
        
    }
    catch (err){
        console.log("error in the delete")
        next(err)
    }
}
module.exports = dishReviewController