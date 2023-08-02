

const dishReviewController = {}


const DishModels = require('./models/dishReviewModels.js')
const User = require('./models/userModel.js');

dishReviewController.addReview = (req,res,next) => {
    console.log("reached the add review controller")
    const {restaurant, grade, dishName, category, notes, userId} = req.body
    if(restaurant !=  '' && grade != '' && dishName != '' && category != '' && notes != '' ) {
        // res.status(302)
        DishModels.DishReview.create({dishName , restaurant, grade, notes, category, userId}).then(() => {next()}).catch((err) => {console.log("error")})
      }
      else next("Error in the addReview controller")
      next()
}

dishReviewController.getReviews = (req,res,next) => {
    const userId = req.query.userId

    try {
    DishModels.DishReview.find({userId : userId}).then((data) =>{
        res.locals.reviewsData = data
        next()
    })
    }
    catch (err) {
        console.log("disaster in the getReviews function " + err)
        next(err)
    }
}
module.exports = dishReviewController